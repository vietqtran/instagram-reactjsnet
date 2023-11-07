using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.DataAccess.Data;
using vietqtran.Models.DTO;
using Microsoft.EntityFrameworkCore;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Models.RequestModels.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using vietqtran.Core.Utilities;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using vietqtran.Models.ViewModels;
using vietqtran.Models.Entities;
using System.Security.Cryptography;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.ResponseModels;

namespace vietqtran.DataLayer.Repositories
{
	public class AppUserRepository : IAppUserRepository
	{
		private readonly DataContext _context;
		private readonly UserManager<User> _userManager;
		private readonly SignInManager<User> _signInManager;
		private readonly IOptions<JwtConfig> _jwtConfig;
		private readonly IMapper _mapper;
		private readonly ILogger<AppUserRepository> _logger;

		public AppUserRepository (DataContext context,
		    UserManager<User> userManager,
		    SignInManager<User> signInManager,
		    IOptions<JwtConfig> jwtConfig,
		    IMapper mapper,
		    ILogger<AppUserRepository> logger)
		{
			_mapper = mapper;
			_context = context;
			_userManager = userManager;
			_signInManager = signInManager;
			_jwtConfig = jwtConfig;
			_logger = logger;
		}

		public async Task<ICollection<User>> GetAllUsersAsync ( )
		{
			return await _context.Users.ToListAsync();
		}

		public async Task<AuthResponse> Login (LoginCredentials credentials)
		{
			//! Check match email & password
			var user = await _userManager.FindByEmailAsync(credentials.Email);
			if (user == null) {
				return null;
			}
			var authResult = await _signInManager.CheckPasswordSignInAsync(user, credentials.Password, false);
			if (!authResult.Succeeded) {
				return null;
			}
			//! Matched

			//! Get tokens by userId
			var token = await _context.AccessTokens.Where(t => t.User.Id == user.Id).FirstOrDefaultAsync();
			if (token == null) {
				return null;
			}
			var refreshToken = await _context.RefreshTokens.Where(t => t.User.Id == user.Id).FirstOrDefaultAsync();
			if (refreshToken == null) {
				return null;
			}
			//! Get token successed

			return new AuthResponse()
			{
				AccessToken = token.Token,
				RefreshToken = refreshToken.Token,
				ExpireDate = token.ExpiryDate,
				Role = user.UserRole.Name
			};
		}


		public async Task<bool> Register (SignUpCredentials credentials)
		{
			var user = _mapper.Map<User>(credentials);

			//! Set Role for user
			user.Id = Guid.NewGuid();

			//! Create User
			var role = _context.Roles.Where(r => r.Name == "User").FirstOrDefault();

			if (role == null) {
				return false;
			}

			user.UserRole = role;
			user.RoleId = role.Id;

			var result = await _userManager.CreateAsync(user, credentials.Password);

			if (!result.Succeeded) {
				return false;
			}

			var accessToken = TokenGenerator.GenerateAccessToken(user, _jwtConfig);
			var refreshToken = TokenGenerator.GenerateRefreshToken(user);

			if (accessToken == null || refreshToken == null) {
				return false;
			}

			await _context.AccessTokens.AddAsync(accessToken);
			await _context.RefreshTokens.AddAsync(refreshToken);

			try {
				await _context.SaveChangesAsync();
			} catch (Exception ex) {
				return false;
			}

			return true;
		}

	}
}

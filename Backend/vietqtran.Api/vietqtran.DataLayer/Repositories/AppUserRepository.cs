// Ignore Spelling: Username vietqtran

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
		private readonly IOptions<JwtConfig> _jwtConfig;
		private readonly IMapper _mapper;
		private readonly ILogger<AppUserRepository> _logger;

		public AppUserRepository (DataContext context,
		    IOptions<JwtConfig> jwtConfig,
		    IMapper mapper,
		    ILogger<AppUserRepository> logger)
		{
			_mapper = mapper;
			_context = context;
			_jwtConfig = jwtConfig;
			_logger = logger;
		}

		/// <summary>
		/// Get All User
		/// </summary>
		public async Task<ICollection<User>> GetAllUsersAsync ( )
		{
			return await _context.Users.ToListAsync();
		}

		public Task<Role> GetRoleByUserId (Guid id)
		{
			throw new NotImplementedException();
		}

		public async Task<User> GetUserByUsernameAsync (string username)
		{
			try {
				var user = await _context.Users
					.Where(u => u.UserName == username)
					.Include(u => u.Followers)
					.Include(u => u.Followeds)
					.Include(u => u.Posts)
					.FirstOrDefaultAsync();
				if (user == null) { return null; }
				return user;
			} catch (Exception ex) {
				_logger.LogError(ex.Message);
				return null;
			}
		}

		/// <summary>
		/// Update Refresh Token in Database
		/// </summary>
		public async Task UpdateRefreshToken (RefreshToken newRefeshToken)
		{
			var refreshToken = await _context.RefreshTokens.Where(t => t.UserId == newRefeshToken.UserId).FirstOrDefaultAsync();

			if (refreshToken != null) {
				_context.RefreshTokens.Remove(refreshToken);
			}

			await _context.RefreshTokens.AddAsync(newRefeshToken);
			await _context.SaveChangesAsync();
		}
	}
}

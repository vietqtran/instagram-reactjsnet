using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.ViewModels;
using vietqtran.Models.DTO;
using vietqtran.Core.Interfaces.IService;
using AutoMapper;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Models.RequestModels.User;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using vietqtran.Models.ResponseModels;
using Microsoft.EntityFrameworkCore;
using System.Net;
using vietqtran.Core.Utilities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace vietqtran.Services.Services
{
	public class AppUserService : IAppUserService
	{
		private readonly IAppUserRepository _appUserRepository;
		private readonly UserManager<User> _userManager;
		private readonly SignInManager<User> _signInManager;
		private readonly IOptions<JwtConfig> _jwtConfig;
		private readonly IMapper _mapper;

		public AppUserService (IAppUserRepository appUserRepository,
			UserManager<User> userManager,
			SignInManager<User> signInManager,
			IOptions<JwtConfig> jwtConfig,
			IMapper mapper)
		{
			_appUserRepository = appUserRepository;
			_userManager = userManager;
			_signInManager = signInManager;
			_jwtConfig = jwtConfig;
			_mapper = mapper;
		}

		/// <summary>
		/// Get All Users
		/// </summary>
		public async Task<ICollection<User>> GetAllUsersServiceAsync ( )
		{
			var users = await _appUserRepository.GetAllUsersAsync();
			return users;
		}

		/// <summary>
		/// Login
		/// </summary> 
		public async Task<LoginResponse> Login (LoginCredentials loginCredentials)
		{
			try {
				var user = await _userManager.FindByEmailAsync(loginCredentials.Email);
				if (user == null) {
					return new LoginResponse
					{
						Error = "Email not found!",
						Status = "Failed"
					};
				}

				var result = await _signInManager.PasswordSignInAsync(user, loginCredentials.Password, true, false);
				if (!result.Succeeded) {
					return new LoginResponse
					{
						Error = "Password is incorrect!",
						Status = "Failed"
					};
				}

				var accessToken = await GenerateAccessToken(user);
				var refreshToken = await GenerateRefreshToken(user.Id.ToString(), user.Email);

				await _appUserRepository.UpdateRefreshToken(refreshToken);

				return new LoginResponse
				{
					AccessToken = accessToken,
					RefreshToken = refreshToken.Token,
					Status = "Successed"
				};
			} catch (Exception ex) {
				return new LoginResponse
				{
					Error = ex.Message,
					Status = "Failed"
				};
			}
		}

		/// <summary>
		/// Register
		/// </summary> 
		public async Task<SignUpResponse> Register (SignUpCredentials signUpCredentials)
		{
			try {
				var user = _mapper.Map<User>(signUpCredentials);

				var result = await _userManager.CreateAsync(user, signUpCredentials.Password);

				await _userManager.AddToRoleAsync(user, "User");

				if (result.Succeeded) {
					return new SignUpResponse
					{
						Status = "Successed",
					};
				}

				return new SignUpResponse
				{
					Error = "Can't register!",
					Status = "Failed"
				};
			} catch (Exception ex) {
				return new SignUpResponse
				{
					Error = ex.Message,
					Status = "Failed"
				};
			}
		}

		/// <summary>
		/// Generate Access Token 
		/// </summary> 
		public async Task<string> GenerateAccessToken (User user)
		{
			try {
				var roles = await _userManager.GetRolesAsync(user);

				var claims = new List<Claim>
			{
				new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
				new Claim(JwtRegisteredClaimNames.GivenName, user.UserName),
				new Claim(JwtRegisteredClaimNames.Email, user.Email),
				new Claim("UserId", user.Id.ToString())
			};

				claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

				var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtConfig.Value.SecretKey));

				var signingCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

				var tokenDescriptor = new SecurityTokenDescriptor
				{
					Issuer = _jwtConfig.Value.Issuer,
					Audience = _jwtConfig.Value.Audience,
					IssuedAt = DateTime.UtcNow,
					NotBefore = DateTime.UtcNow,
					Expires = DateTime.UtcNow.Add(_jwtConfig.Value.ExpiryTime),
					Subject = new ClaimsIdentity(claims),
					SigningCredentials = signingCredentials
				};

				var tokenHandler = new JwtSecurityTokenHandler();
				var accessToken = tokenHandler.CreateToken(tokenDescriptor);

				return tokenHandler.WriteToken(accessToken).ToString();
			} catch (Exception ex) {
				return ex.ToString();
			}
		}

		/// <summary>
		/// Generate Refresh Token 
		/// </summary> 
		public async Task<RefreshToken> GenerateRefreshToken (string userId, string email)
		{
			var claims = new[]
			{
				new Claim(JwtRegisteredClaimNames.Sub, userId),
				new Claim(JwtRegisteredClaimNames.Email, email)
			};

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtConfig.Value.SecretKey));

			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
			var token = new JwtSecurityToken(
			    issuer: _jwtConfig.Value.Issuer,
			    expires: DateTime.UtcNow.AddDays(7),
			    claims: claims,
			    signingCredentials: creds
			);

			var tokenHandler = new JwtSecurityTokenHandler();
			var refreshToken = await Task.Run(( ) => tokenHandler.WriteToken(token));

			return new RefreshToken
			{
				Token = refreshToken,
				Exp = token.ValidTo,
				UserId = Guid.Parse(userId)
			};
		}
	}
}

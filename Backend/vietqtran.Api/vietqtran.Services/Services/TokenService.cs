using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Core.Utilities;
using vietqtran.Models.Entities;
using vietqtran.Models.RequestModels.User;

namespace vietqtran.Services.Services
{
	public class TokenService : ITokenService
	{
		private readonly ITokenRepository _tokenRepository;
		private readonly UserManager<User> _userManager;
		private readonly IOptions<JwtConfig> _jwtConfig;



		public TokenService (ITokenRepository tokenRepository, UserManager<User> userManager, IOptions<JwtConfig> jwtConfig)
		{
			_tokenRepository = tokenRepository;
			_userManager = userManager;
			_jwtConfig = jwtConfig;
		}

		public async Task<string> RefreshToken (string refreshToken)
		{
			//Check if the token is expired
			var handler = new JwtSecurityTokenHandler();
			var jwtToken = handler.ReadToken(refreshToken) as JwtSecurityToken ?? throw new Exception("Invalid token");

			// Lấy ngày hết hạn 
			var expireDate = jwtToken.ValidTo;
			if (expireDate < DateTime.UtcNow) {
				return string.Empty;
			}
			var claims = jwtToken.Claims.ToList();
			var email = claims.Where(x => x.Type == "email").Select(x => x.Value).FirstOrDefault();
			var user = await _userManager.FindByEmailAsync(email);
			if (user == null) {
				return string.Empty;
			}

			var newRefreshToken = await GenerateRefreshToken(user.Id.ToString(), email);

			await _tokenRepository.ReplaceRefreshToken(refreshToken, newRefreshToken);

			var accessToken = await GenerateAccessToken(user);

			return accessToken;
		}

		private ClaimsPrincipal DecodeToken (string token)
		{
			var tokenHandler = new JwtSecurityTokenHandler();
			var jwtToken = tokenHandler.ReadToken(token) as JwtSecurityToken ?? throw new SecurityTokenException("Invalid token");
			var claims = jwtToken.Claims;
			var user = new ClaimsPrincipal();
			user.AddIdentities(new[] {
				new ClaimsIdentity(claims, "Jwt")
			});
			return user;
		}

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

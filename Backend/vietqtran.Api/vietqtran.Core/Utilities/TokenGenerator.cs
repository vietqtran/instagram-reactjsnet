using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.Core.Utilities
{
	public static class TokenGenerator
	{
		public static AccessToken GenerateAccessToken (User user, IOptions<JwtConfig> _jwtConfig)
		{
			if (user == null) {
				throw new ArgumentNullException("User", "User cannot be null");
			}

			var claims = new List<Claim>
			{
				new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
				new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
				new Claim(ClaimTypes.Role, user.UserRole.Name),
			};

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

			return new AccessToken
			{
				Id = Guid.NewGuid(),
				Token = tokenHandler.WriteToken(accessToken),
				ExpiryDate = DateTime.UtcNow.Add(_jwtConfig.Value.ExpiryTime),
				User = user,
				UserId = user.Id
			};
		}

		public static RefreshToken GenerateRefreshToken (User user)
		{
			var randomNumber = new byte[32];
			using var rng = RandomNumberGenerator.Create();
			rng.GetBytes(randomNumber);
			return new RefreshToken()
			{
				Id = Guid.NewGuid(),
				Token = Convert.ToBase64String(randomNumber),
				User = user,
				UserId = user.Id,
				ExpiryDate = DateTime.UtcNow.AddMonths(1)
			};
		}
	}
}

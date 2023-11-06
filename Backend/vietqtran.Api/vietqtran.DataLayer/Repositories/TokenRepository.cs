using Microsoft.EntityFrameworkCore;
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
using vietqtran.Core.Utilities;
using vietqtran.DataAccess.Data;
using vietqtran.Models.Models;
using vietqtran.Models.ResponseModels;
using vietqtran.Models.User;

namespace vietqtran.DataLayer.Repositories
{
	public class TokenRepository : ITokenRepository
	{
		private readonly DataContext _dataContext;
		private readonly IOptions<JwtConfig> _jwtConfig;

		public TokenRepository (DataContext dataContext, IOptions<JwtConfig> jwtConfig)
		{
			_dataContext = dataContext;
			_jwtConfig = jwtConfig;
		}

		public async Task<AuthResponse> RefreshToken (string refreshToken)
		{
			var rToken = await _dataContext.RefreshTokens.Where(t => t.Token == refreshToken).FirstOrDefaultAsync();
			if (rToken == null) {
				return null;
			}
			var user = await _dataContext.Users.Where(u => u.Id == rToken.UserId).FirstOrDefaultAsync();
			if (user == null) {
				return null;
			}

			_dataContext.AccessTokens.Remove(await _dataContext.AccessTokens.Where(t => t.UserId == user.Id).FirstOrDefaultAsync());

			var accessToken = TokenGenerator.GenerateAccessToken(user, _jwtConfig);

			await _dataContext.AccessTokens.AddAsync(accessToken);

			await _dataContext.SaveChangesAsync();

			return new AuthResponse()
			{
				ExpireDate = accessToken.ExpiryDate,
				AccessToken = accessToken.Token,
				RefreshToken = rToken.Token,
			};
		}

	}
}

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
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Core.Utilities;
using vietqtran.Models.Models;
using vietqtran.Models.RequestModels.User;
using vietqtran.Models.ResponseModels;
using vietqtran.Models.User;

namespace vietqtran.Services.Services
{
	public class TokenService : ITokenService
	{
		private readonly ITokenRepository _refreshTokenRepository;
		private readonly IOptions<JwtConfig> _jwtConfig;


		public TokenService (ITokenRepository refreshTokenRepository, IOptions<JwtConfig> jwtConfig)
		{
			_refreshTokenRepository = refreshTokenRepository;
			_jwtConfig = jwtConfig;
		}

		public Task<AuthResponse> RefreshToken (string refreshToken)
		{
			return _refreshTokenRepository.RefreshToken(refreshToken);
		}
	}
}

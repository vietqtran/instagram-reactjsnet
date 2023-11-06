using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;
using vietqtran.Models.ViewModels;
using vietqtran.Models.DTO;
using vietqtran.Core.Interfaces.IService;
using AutoMapper;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Models.RequestModels.User;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using vietqtran.Models.Models;
using vietqtran.Models.ResponseModels;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace vietqtran.Services.Services
{
	public class AppUserService : IAppUserService
	{
		private readonly IAppUserRepository _appUserRepository;
		private readonly ITokenRepository _tokenRepository;

		public AppUserService (IAppUserRepository appUserRepository, ITokenRepository tokenRepository)
		{
			_appUserRepository = appUserRepository;
			_tokenRepository = tokenRepository;
		}


		public async Task<ICollection<AppUser>> GetAllUsersServiceAsync ( )
		{
			var users = await _appUserRepository.GetAllUsersAsync();
			return users;
		}

		public async Task<AuthResponse> Login (LoginCredentials loginCredentials)
		{
			var response = await _appUserRepository.Login(loginCredentials);

			if (response.ExpireDate < DateTime.UtcNow) {
				return await _tokenRepository.RefreshToken(response.RefreshToken);
			}

			return response;
		}

		public Task<AuthResponse> Register (SignUpCredentials signUpCredentials)
		{
			var tokens = _appUserRepository.Register(signUpCredentials);

			return tokens;
		}
	}
}

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

namespace vietqtran.Services.Services
{
    public class AppUserService : IAppUserService
    {
        private readonly ILogger<AppUserService> _logger;
        public readonly IAppUserRepository _appUserRepository;

        public AppUserService (IAppUserRepository appUserRepository, ILogger<AppUserService> logger)
        {
            _appUserRepository = appUserRepository;
            _logger = logger;
        }


        public async Task<ICollection<AppUser>> GetAllUsersServiceAsync ( )
        {
            var users = await _appUserRepository.GetAllUsersAsync();
            return users;
        }

        public async Task<string> GetLoginToken (LoginCredentials loginCredentials)
        {
            _logger.LogInformation("Service: Login for user: {userEmail}", loginCredentials.Email);
            return await _appUserRepository.Login(loginCredentials);
        }

        public async Task<AppUserVM> SignUp (SignUpCredentials signUpCredentials)
        {
            return await _appUserRepository.SignUpAsync(signUpCredentials);
        }
    }
}

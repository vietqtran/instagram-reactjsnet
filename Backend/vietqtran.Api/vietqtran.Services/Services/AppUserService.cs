using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;
using vietqtran.Models.ViewModels;
using vietqtran.Models.DTO;
using vietqtran.Services.IRepositories;
using AutoMapper;

namespace vietqtran.Services.Services
{
    public class AppUserService : IAppUserService
    {
        public readonly IAppUserRepository _appUserRepository;

        public AppUserService (IAppUserRepository appUserRepository)
        {
            _appUserRepository = appUserRepository;
        }


        public ICollection<AppUser> GetAllUsersService ( )
        {
            var users = _appUserRepository.GetAllUsers();
            return users;
        }


        Task<AppUserVM> IAppUserService.GetById (Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<AppUserVM> Create (AppUserDTO userDto)
        {
            throw new NotImplementedException();
        }

        public Task<AppUserVM> Update (AppUserDTO userDto)
        {
            throw new NotImplementedException();
        }

        Task<bool> IAppUserService.Delete (Guid id)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<AppUserVM>> IAppUserService.GetWithPagination (string keyword, int page, int pageSize)
        {
            throw new NotImplementedException();
        }
    }
}

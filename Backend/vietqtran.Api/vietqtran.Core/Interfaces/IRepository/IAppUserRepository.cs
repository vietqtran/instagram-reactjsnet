using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;
using vietqtran.Models.DTO;
using vietqtran.Models.RequestModels.User;
using Microsoft.AspNetCore.Identity;
using vietqtran.Models.ViewModels;

namespace vietqtran.Core.Interfaces.IRepository
{
    public interface IAppUserRepository
    {
        public Task<ICollection<AppUser>> GetAllUsersAsync ( );

        public Task<AppUserVM> SignUpAsync (SignUpCredentials signUpCredentials);

        public Task<string> Login (LoginCredentials loginCredentials);
    }
}

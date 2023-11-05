using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;
using vietqtran.Models.ViewModels;
using vietqtran.Models.DTO;
using vietqtran.Models.RequestModels.User;
using Microsoft.AspNetCore.Identity;

namespace vietqtran.Core.Interfaces.IService
{
    public interface IAppUserService
    {
        public Task<ICollection<AppUser>> GetAllUsersServiceAsync ( );

        public Task<string> GetLoginToken (LoginCredentials loginCredentials);

        public Task<AppUserVM> SignUp (SignUpCredentials signUpCredentials);
    }
}

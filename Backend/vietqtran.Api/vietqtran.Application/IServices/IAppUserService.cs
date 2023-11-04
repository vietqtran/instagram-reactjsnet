using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;
using vietqtran.Models.ViewModels;
using vietqtran.Models.DTO;

namespace vietqtran.Services.Services
{
    public interface IAppUserService
    {
        public Task<ICollection<AppUser>> GetAllUsersServiceAsync ( );

        public Task<AppUserVM> GetById (Guid id);

        public Task<AppUserVM> Create (AppUserDTO userDto);

        public Task<AppUserVM> Update (AppUserDTO userDto);

        public Task<bool> Delete (Guid id);

        public Task<IEnumerable<AppUserVM>> GetWithPagination (string keyword, int page, int pageSize);
    }
}

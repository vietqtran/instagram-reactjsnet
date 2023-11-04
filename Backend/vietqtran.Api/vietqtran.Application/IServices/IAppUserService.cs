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
        Task<IEnumerable<AppUserVM>> GetAll ( );

        Task<AppUserVM> GetById (Guid id);

        Task<AppUserVM> Create (AppUserDTO userDto);

        Task<AppUserVM> Update (AppUserDTO userDto);

        Task<bool> Delete (Guid id);

        Task<IEnumerable<AppUserVM>> GetWithPagination (string keyword, int page, int pageSize);
    }
}

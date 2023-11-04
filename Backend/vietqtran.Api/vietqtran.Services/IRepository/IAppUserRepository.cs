using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;
using vietqtran.Models.DTO;

namespace vietqtran.Services.IRepositories
{
    public interface IAppUserRepository
    {
        Task<IEnumerable<AppUser>> GetAll ( );

        Task<AppUser?> GetByIdAsync (string id);

        Task<AppUser> CreateAsync (AppUserDTO userDto);

        Task<AppUser> UpdateAsync (AppUserDTO userDto);

        Task<bool> DeleteAsync (string id);

        IEnumerable<AppUser> Search (string searchTerm);
    }
}

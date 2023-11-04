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
        public Task<ICollection<AppUser>> GetAllUsersAsync ( );

        public AppUser? GetById (string id);

        public AppUser Create (AppUserDTO userDto);

        public AppUser Update (AppUserDTO userDto);

        public bool Delete (string id);

        public AppUser Search (string searchTerm);
    }
}

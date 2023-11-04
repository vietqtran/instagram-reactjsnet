using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.DataAccess.Data;
using vietqtran.Models.DTO;
using vietqtran.Services.IRepositories;
using vietqtran.Models.User;
using System.Data.Entity;

namespace vietqtran.DataLayer.Repositories
{
    public class AppUserRepository : IAppUserRepository
    {
        DataContext _context;

        public AppUserRepository (DataContext context)
        {
            _context = context;
        }

        public async Task<AppUser> CreateAsync (AppUserDTO userDto)
        {
            var user = new AppUser()
            {
                Id = userDto.Id,
                UserName = userDto.UserName,
                Email = userDto.Email,
                Password = userDto.Password,
            };

            await _context.AppUsers.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<bool> DeleteAsync (string id)
        {
            try {
                var user = await _context.AppUsers.FindAsync(Guid.Parse(id));

                if (user == null) {
                    return false;
                }

                _context.AppUsers.Remove(user);
                await _context.SaveChangesAsync();

                return true;
            } catch (Exception ex) {
                return false;
            }
        }

        public async Task<IEnumerable<AppUser>> GetAll ( )
        {
            var users = await _context.AppUsers.ToListAsync();

            return users;
        }


        public async Task<AppUser?> GetByIdAsync (string id)
        {
            try {
                var user = await _context.AppUsers.FindAsync(Guid.Parse(id));

                if (user == null) {
                    return null;
                }

                return user;
            } catch (Exception ex) {
                return null;
            }
        }

        public async Task<AppUser> UpdateAsync (AppUserDTO userDto)
        {
            var user = await _context.AppUsers.FindAsync(userDto.Id);

            if (user == null) {
                throw new KeyNotFoundException("User not found");
            }

            user.UserName = userDto.UserName;
            user.Email = userDto.Email;

            _context.AppUsers.Update(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public IEnumerable<AppUser> Search (string searchTerm)
        {
            throw new NotImplementedException();
        }

    }
}

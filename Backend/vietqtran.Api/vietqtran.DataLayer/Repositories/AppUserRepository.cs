using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.DataAccess.Data;
using vietqtran.Models.DTO;
using vietqtran.Models.User;
using Microsoft.EntityFrameworkCore;
using vietqtran.Core.Interfaces.IRepository;

namespace vietqtran.DataLayer.Repositories
{
    public class AppUserRepository : IAppUserRepository
    {
        DataContext _context;

        public AppUserRepository (DataContext context)
        {
            _context = context;
        }

        public AppUser Create (AppUserDTO userDto)
        {
            var user = new AppUser()
            {
                Id = userDto.Id,
                UserName = userDto.UserName,
                Email = userDto.Email,
                Password = userDto.Password,
            };

            _context.AppUsers.AddAsync(user);
            _context.SaveChangesAsync();

            return user;
        }

        public bool Delete (string id)
        {
            try {
                var user = _context.AppUsers.Where(u => u.Id == Guid.Parse(id)).FirstOrDefault();

                if (user == null) {
                    return false;
                }

                _context.AppUsers.Remove(user);
                _context.SaveChanges();

                return true;
            } catch (Exception ex) {
                return false;
            }
        }

        public async Task<ICollection<AppUser>> GetAllUsersAsync ( )
        {
            return await _context.AppUsers.ToListAsync();
        }


        public AppUser? GetById (string id)
        {
            try {
                var user = _context.AppUsers.Where(u => u.Id == Guid.Parse(id)).FirstOrDefault();

                if (user == null) {
                    return null;
                }

                return user;
            } catch (Exception ex) {
                return null;
            }
        }

        public AppUser Update (AppUserDTO userDto)
        {
            var user = _context.AppUsers.Where(u => u.Id == userDto.Id).FirstOrDefault();

            if (user == null) {
                throw new KeyNotFoundException("User not found");
            }

            user.UserName = userDto.UserName;
            user.Email = userDto.Email;

            _context.AppUsers.Update(user);
            _context.SaveChanges();

            return user;
        }

        public AppUser Search (string searchTerm)
        {
            throw new NotImplementedException();
        }

    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;

namespace vietqtran.DataLayer.Extensions
{
    public static class ModelBuilderExtensions
    {
        public static void SeedData (this ModelBuilder modelBuilder)
        {
            //! Seeding Data
            modelBuilder.Entity<AppUserRole>().HasData(
                new AppUserRole
                {
                    Id = Guid.NewGuid(),
                    Name = "Admin"
                },
                new AppUserRole
                {
                    Id = Guid.NewGuid(),
                    Name = "User"

                },
                new AppUserRole
                {
                    Id = Guid.NewGuid(),
                    Name = "Manager"
                }
            );

            modelBuilder.Entity<AppUser>().HasData(
                new AppUser
                {
                    Email = "ngothilinhchi@gmail.com",
                    EmailConfirmed = true,
                    Name = "Ngô Thị Linh Chi",
                    Password = "linhchi",
                    Id = Guid.NewGuid(),
                },
                new AppUser
                {
                    Email = "tranquocviet1303@gmail.com",
                    EmailConfirmed = true,
                    Name = "Trần Quốc Việt",
                    Password = "admin",
                    Id = Guid.NewGuid()
                },
                new AppUser
                {
                    Email = "tranthuylinh@gmail.com",
                    EmailConfirmed = true,
                    Name = "Trần Thùy Linh",
                    Password = "thuylinh",
                    Id = Guid.NewGuid()
                }
            );
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Extensions
{
	public static class ModelBuilderExtensions
	{
		public static void SeedData (this ModelBuilder modelBuilder)
		{
			//! Seeding Data
			modelBuilder.Entity<Role>().HasData(
			    new Role
			    {
				    Id = Guid.NewGuid(),
				    Name = "Admin",
				    Description = "Role for ADMIN",
				    NormalizedName = "ADMIN"
			    },
			    new Role
			    {
				    Id = Guid.NewGuid(),
				    Name = "User",
				    Description = "Role for USER",
				    NormalizedName = "USER"
			    }
			);
		}
	}
}

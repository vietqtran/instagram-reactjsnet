using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;
using vietqtran.DataLayer.Configurations;
using vietqtran.DataLayer.Extensions;
using vietqtran.Models.Models;
using vietqtran.Models.User;

namespace vietqtran.DataAccess.Data
{
	public class DataContext : IdentityDbContext<AppUser, AppUserRole, Guid>
	{
		public DataContext (DbContextOptions<DataContext> options) : base(options)
		{

		}

		protected override void OnModelCreating (ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfiguration(new UserConfiguration());
			modelBuilder.ApplyConfiguration(new UserRoleConfiguration());

			modelBuilder.Entity<IdentityUserClaim<Guid>>().ToTable("User_Claims");
			modelBuilder.Entity<IdentityUserRole<Guid>>().ToTable("User_Roles").HasKey(ur => new { ur.UserId, ur.RoleId });
			modelBuilder.Entity<IdentityUserLogin<Guid>>().ToTable("User_Logins").HasKey(ul => ul.UserId);
			modelBuilder.Entity<IdentityUserToken<Guid>>().ToTable("User_Tokens").HasKey(ut => ut.UserId);

			//! Call Seeder
			modelBuilder.SeedData();
		}

		public DbSet<RefreshToken> RefreshTokens { get; set; }
		public DbSet<AccessToken> AccessTokens { get; set; }
	}
}

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

			modelBuilder.Entity<IdentityUserClaim<Guid>>().ToTable("UserClaims");
			modelBuilder.Entity<IdentityUserRole<Guid>>().ToTable("UserRoles").HasKey(ur => new { ur.UserId, ur.RoleId });
			modelBuilder.Entity<IdentityUserLogin<Guid>>().ToTable("UserLogins").HasKey(ul => ul.UserId);
			modelBuilder.Entity<IdentityUserToken<Guid>>().ToTable("UserTokens").HasKey(ut => ut.UserId);

			//! Call Seeder
			modelBuilder.SeedData();
		}

		public DbSet<RefreshToken> RefreshTokens { get; set; }
		public DbSet<AccessToken> AccessTokens { get; set; }
	}
}

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
using vietqtran.Models.Entities;
using vietqtran.Models.Entities.Relations;
using vietqtran.Models.Enums;

namespace vietqtran.DataAccess.Data
{
	/// <summary>
	/// This source code is used to configure the DbContext for an ASP.NET Core application 
	/// with Entity Framework Core and integrate user authentication 
	/// and management through ASP.NET Identity.
	/// </summary>
	public class DataContext : IdentityDbContext<User, Role, Guid>
	{
		public DataContext (DbContextOptions<DataContext> options) : base(options)
		{

		}

		protected override void OnModelCreating (ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfiguration(new UserConfiguration());
			modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
			modelBuilder.ApplyConfiguration(new MessageConfiguration());
			modelBuilder.ApplyConfiguration(new ReactMessageConfiguration());
			modelBuilder.ApplyConfiguration(new RefreshTokenConfiguration());
			modelBuilder.ApplyConfiguration(new AccessTokenConfiguration());
			modelBuilder.ApplyConfiguration(new PersonalLinkConfiguration());
			modelBuilder.ApplyConfiguration(new StoryConfiguration());
			modelBuilder.ApplyConfiguration(new FollowConfiguration());
			modelBuilder.ApplyConfiguration(new BlockConfiguration());
			modelBuilder.ApplyConfiguration(new PostConfiguration());

			modelBuilder.Entity<IdentityUserClaim<Guid>>().ToTable("User_Claims");
			modelBuilder.Entity<IdentityUserRole<Guid>>().ToTable("User_Roles").HasKey(ur => new { ur.UserId, ur.RoleId });
			modelBuilder.Entity<IdentityUserLogin<Guid>>().ToTable("User_Logins").HasKey(ul => ul.UserId);
			modelBuilder.Entity<IdentityUserToken<Guid>>().ToTable("User_Tokens").HasKey(ut => ut.UserId);

			//! Call Seeder
			modelBuilder.SeedData();
		}

		public DbSet<RefreshToken> RefreshTokens { get; set; }
		public DbSet<AccessToken> AccessTokens { get; set; }
		public DbSet<Message> Messages { get; set; }
		public DbSet<ReactMessage> ReactMessages { get; set; }
		public DbSet<PersonalLink> PersonalLinks { get; set; }
		public DbSet<Story> Stories { get; set; }
		public DbSet<HighLight> HighLights { get; set; }
		public DbSet<Follow> Follows { get; set; }
		public DbSet<Block> Blocks { get; set; }
		public DbSet<Post> Posts { get; set; }
	}
}

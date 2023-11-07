using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;

namespace vietqtran.DataLayer.Configurations
{
	public class UserConfiguration : IEntityTypeConfiguration<AppUser>
	{
		public void Configure (EntityTypeBuilder<AppUser> builder)
		{
			builder.Property(u => u.Email).IsRequired(false);

			builder.Property(u => u.PhoneNumber).IsRequired(false);

			builder.HasOne(u => u.AppUserRole)
				.WithMany(r => r.AppUsers)
				.HasForeignKey(u => u.Id);

			builder.Property(u => u.Avatar).IsRequired(false);

			builder.Property(u => u.CreatedAt).HasDefaultValue(DateTime.UtcNow);

			builder.Property(u => u.Bio).IsRequired(false);
		}
	}
}

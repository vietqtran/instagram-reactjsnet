using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.DataLayer.Configurations
{
	public class BestFriendConfiguration : IEntityTypeConfiguration<BestFriend>
	{
		public void Configure (EntityTypeBuilder<BestFriend> builder)
		{
			builder.ToTable("User_BestFriends");

			builder.HasKey(bf => bf.Id);

			builder.HasIndex(bf => bf.RequestUserId);
			builder.HasIndex(bf => bf.ResponseUserId);

			builder.HasOne(bf => bf.ResponseUser)
				.WithMany(u => u.ResponseUsers)
				.HasForeignKey(bf => bf.ResponseUserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(bf => bf.RequestUser)
				.WithMany(u => u.RequestUsers)
				.HasForeignKey(bf => bf.RequestUserId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

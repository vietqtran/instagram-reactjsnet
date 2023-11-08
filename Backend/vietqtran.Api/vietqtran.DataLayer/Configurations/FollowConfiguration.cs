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
	internal class FollowConfiguration : IEntityTypeConfiguration<Follow>
	{
		public void Configure (EntityTypeBuilder<Follow> builder)
		{
			builder.ToTable("User_Follows");

			builder.HasKey(f => f.Id);

			builder.HasIndex(f => f.FollowerId);
			builder.HasIndex(f => f.FollowedId);

			builder.HasOne(f => f.Followed)
				.WithMany(u => u.Followeds)
				.HasForeignKey(f => f.FollowedId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(f => f.Follower)
				.WithMany(u => u.Followers)
				.HasForeignKey(f => f.FollowerId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

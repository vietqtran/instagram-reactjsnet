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
	internal class FollowHashTagConfiguration : IEntityTypeConfiguration<FollowHashTag>
	{
		public void Configure (EntityTypeBuilder<FollowHashTag> builder)
		{
			builder.ToTable("Follows_HashTag");

			builder.HasKey(f => f.Id);

			builder.HasIndex(f => new { f.UserId, f.HashTagId });

			builder.HasOne(f => f.User)
				.WithMany(u => u.FollowHashTags)
				.HasForeignKey(f => f.UserId);
			builder.HasOne(f => f.HashTag)
				.WithMany(u => u.FollowHashTags)
				.HasForeignKey(f => f.HashTagId);
		}
	}
}

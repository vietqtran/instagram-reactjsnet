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
	internal class LikePostConfiguration : IEntityTypeConfiguration<LikePost>
	{
		public void Configure (EntityTypeBuilder<LikePost> builder)
		{
			builder.ToTable("Likes_Post");

			builder.HasKey(lp => new { lp.PostId, lp.UserId });

			builder.HasIndex(lp => lp.PostId);
			builder.HasIndex(lp => lp.UserId);

			builder.HasOne(lp => lp.Post)
				.WithMany(p => p.LikePosts)
				.HasForeignKey(p => p.PostId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(lp => lp.User)
				.WithMany(u => u.LikePosts)
				.HasForeignKey(u => u.UserId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

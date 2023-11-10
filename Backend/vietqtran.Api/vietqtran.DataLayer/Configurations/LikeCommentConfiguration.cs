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
	internal class LikeCommentConfiguration : IEntityTypeConfiguration<LikeComment>
	{
		public void Configure (EntityTypeBuilder<LikeComment> builder)
		{
			builder.ToTable("Likes_Comment");

			builder.HasKey(lc => lc.Id);

			builder.HasIndex(lc => lc.CommentId);
			builder.HasIndex(lc => lc.UserId);

			builder.HasOne(lc => lc.Comment)
				.WithMany(c => c.LikeComments)
				.HasForeignKey(lc => lc.CommentId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(lp => lp.User)
				.WithMany(u => u.LikeComments)
				.HasForeignKey(u => u.UserId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

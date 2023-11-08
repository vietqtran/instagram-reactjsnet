using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Configurations
{
	internal class PostConfiguration : IEntityTypeConfiguration<Post>
	{
		public void Configure (EntityTypeBuilder<Post> builder)
		{
			builder.ToTable("Posts");

			builder.HasKey(p => p.Id);

			builder.HasIndex(pl => pl.Id);
			builder.HasIndex(pl => pl.UserId);

			builder.HasOne(p => p.User)
				.WithMany(u => u.Posts)
				.HasForeignKey(p => p.UserId);
			builder.HasMany(p => p.LikePosts)
				.WithOne(lp => lp.Post)
				.HasForeignKey(lp => lp.PostId);
			builder.HasMany(p => p.Comments)
				.WithOne(c => c.Post)
				.HasForeignKey(p => p.PostId)
				.OnDelete(DeleteBehavior.Cascade);
			builder.HasMany(p => p.Saveds)
				.WithOne(s => s.Post)
				.HasForeignKey(p => p.PostId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

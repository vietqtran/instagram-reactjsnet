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
	public class PostConfiguration : IEntityTypeConfiguration<Post>
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
			builder.HasMany(p => p.Messages)
				.WithOne(m => m.Post)
				.HasForeignKey(m => m.PostId);
		}
	}
}

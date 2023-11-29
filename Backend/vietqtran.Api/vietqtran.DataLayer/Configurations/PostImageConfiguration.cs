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
	internal class PostImageConfiguration : IEntityTypeConfiguration<PostImage>
	{
		public void Configure (EntityTypeBuilder<PostImage> builder)
		{
			builder.ToTable("Post_Images");

			builder.HasKey(pi => pi.Id);

			builder.HasIndex(pi => new { pi.PostId, pi.Link });

			builder.HasOne(pi => pi.Post)
				.WithMany(p => p.PostImages)
				.HasForeignKey(pi => pi.PostId)
				.OnDelete(DeleteBehavior.Cascade);
		}
	}
}

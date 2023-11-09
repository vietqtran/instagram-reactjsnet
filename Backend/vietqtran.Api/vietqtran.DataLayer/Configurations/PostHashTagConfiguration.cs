using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.DataLayer.Configurations
{
	internal class PostHashTagConfiguration : IEntityTypeConfiguration<PostHashTag>
	{
		public void Configure (EntityTypeBuilder<PostHashTag> builder)
		{
			builder.ToTable("Post_HashTags");

			builder.HasKey(ph => new { ph.PostId, ph.HashTagId });

			builder.HasOne(ph => ph.Post)
				.WithMany(p => p.PostHashTags)
				.HasForeignKey(ph => ph.PostId);
			builder.HasOne(ph => ph.HashTag)
				.WithMany(h => h.PostHashTags)
				.HasForeignKey(ph => ph.HashTagId);
		}
	}
}

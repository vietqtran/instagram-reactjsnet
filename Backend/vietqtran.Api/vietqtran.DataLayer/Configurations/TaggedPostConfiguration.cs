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
	internal class TaggedPostConfiguration : IEntityTypeConfiguration<TaggedPost>
	{
		public void Configure (EntityTypeBuilder<TaggedPost> builder)
		{
			builder.ToTable("Tagged_Posts");

			builder.HasIndex(s => s.Id);
			builder.HasIndex(s => s.PostId);
			builder.HasIndex(s => s.TaggedId);

			builder.HasOne(t => t.Post)
				.WithMany(p => p.Tags)
				.HasForeignKey(t => t.PostId);
			builder.HasOne(t => t.Tagged)
				.WithMany(t => t.Tags)
				.HasForeignKey(t => t.TaggedId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

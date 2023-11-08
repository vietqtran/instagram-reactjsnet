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
	internal class StoryConfiguration : IEntityTypeConfiguration<Story>
	{
		public void Configure (EntityTypeBuilder<Story> builder)
		{
			builder.ToTable("Stories");

			builder.HasIndex(s => s.Id);
			builder.HasIndex(s => s.UserId);
			builder.HasIndex(s => s.CreatedAt);

			builder.HasOne(s => s.User)
				.WithMany(u => u.Stories)
				.HasForeignKey(s => s.UserId);
			builder.HasMany(s => s.ViewsStory)
				.WithOne(vs => vs.Story)
				.HasForeignKey(vs => vs.StotyId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

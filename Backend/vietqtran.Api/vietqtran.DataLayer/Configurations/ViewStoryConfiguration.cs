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
	public class ViewStoryConfiguration : IEntityTypeConfiguration<ViewStory>
	{
		public void Configure (EntityTypeBuilder<ViewStory> builder)
		{
			builder.ToTable("Views_Story");

			builder.HasKey(x => x.Id);
			builder.HasKey(vs => new { vs.ViewerId, vs.StotyId });

			builder.HasIndex(vs => new { vs.ViewerId, vs.StotyId });

			builder.HasOne(vs => vs.User)
				.WithMany(u => u.ViewsStory)
				.HasForeignKey(vs => vs.ViewerId);
			builder.HasOne(vs => vs.Story)
				.WithMany(s => s.ViewsStory)
				.HasForeignKey(vs => vs.StotyId);
		}
	}
}

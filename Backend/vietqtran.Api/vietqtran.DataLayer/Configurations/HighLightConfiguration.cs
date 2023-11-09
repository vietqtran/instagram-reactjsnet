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
	internal class HighLightConfiguration : IEntityTypeConfiguration<HighLight>
	{
		public void Configure (EntityTypeBuilder<HighLight> builder)
		{
			builder.ToTable("HighLights");

			builder.HasIndex(hl => hl.Id);

			builder.HasIndex(hl => hl.UserId);

			builder.HasIndex(hl => hl.CreatedAt);

			builder.HasOne(hl => hl.User)
				.WithMany(u => u.HighLights)
				.HasForeignKey(hl => hl.UserId);
		}
	}
}

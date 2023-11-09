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
	internal class SavedGroupConfiguration : IEntityTypeConfiguration<SavedGroup>
	{
		public void Configure (EntityTypeBuilder<SavedGroup> builder)
		{
			builder.ToTable("Saved_Groups");

			builder.HasKey(s => s.Id);

			builder.HasIndex(s => s.UserId);

			builder.HasOne(s => s.User)
				.WithMany(u => u.SavedGroups)
				.HasForeignKey(s => s.UserId);
		}
	}
}

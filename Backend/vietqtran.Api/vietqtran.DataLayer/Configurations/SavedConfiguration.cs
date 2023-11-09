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
	internal class SavedConfiguration : IEntityTypeConfiguration<Saved>
	{
		public void Configure (EntityTypeBuilder<Saved> builder)
		{
			builder.ToTable("Saveds");

			builder.HasKey(s => s.Id);

			builder.HasIndex(s => s.UserId);
		}
	}
}

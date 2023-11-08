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
	internal class HashTagConfiguration : IEntityTypeConfiguration<HashTag>
	{
		public void Configure (EntityTypeBuilder<HashTag> builder)
		{
			builder.ToTable("HashTags");

			builder.HasIndex(h => h.Titile);
		}
	}
}
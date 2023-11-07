using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Configurations
{
	public class RefreshTokenConfiguration : IEntityTypeConfiguration<RefreshToken>
	{
		public void Configure (EntityTypeBuilder<RefreshToken> builder)
		{
			builder.ToTable("Refresh_Tokens");

			builder.HasKey(rt => rt.Id);

			builder.HasIndex(rt => rt.Token).HasDatabaseName("Index_RefreshToken_Token");

		}
	}
}

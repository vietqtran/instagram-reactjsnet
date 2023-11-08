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
	internal class AccessTokenConfiguration : IEntityTypeConfiguration<AccessToken>
	{
		public void Configure (EntityTypeBuilder<AccessToken> builder)
		{
			builder.ToTable("Access_Tokens");

			builder.HasKey(at => at.Id);

			builder.HasIndex(at => at.Token);
		}
	}
}

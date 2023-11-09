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
	internal class UserRoleConfiguration : IEntityTypeConfiguration<Role>
	{
		public void Configure (EntityTypeBuilder<Role> builder)
		{
			builder.ToTable("Roles");

			builder.HasKey(x => x.Id);

			builder.HasIndex(r => r.Name);
		}
	}
}

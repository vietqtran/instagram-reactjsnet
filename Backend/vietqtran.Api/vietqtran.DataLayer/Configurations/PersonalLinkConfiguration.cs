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
	public class PersonalLinkConfiguration : IEntityTypeConfiguration<PersonalLink>
	{
		public void Configure (EntityTypeBuilder<PersonalLink> builder)
		{
			builder.ToTable("Personal_Links");

			builder.HasKey(pl => new { pl.Id, pl.UserId, pl.Link });

			builder.HasIndex(pl => pl.Id);

			builder.HasIndex(pl => pl.UserId);

			builder.HasOne(pl => pl.User)
				.WithMany(u => u.PersonalLinks)
				.HasForeignKey(pl => pl.UserId);
		}
	}
}

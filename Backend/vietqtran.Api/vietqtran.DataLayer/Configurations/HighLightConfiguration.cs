﻿using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Configurations
{
	public class HighLightConfiguration : IEntityTypeConfiguration<HighLight>
	{
		public void Configure (EntityTypeBuilder<HighLight> builder)
		{
			builder.ToTable("HighLights");

			builder.HasIndex(hl => hl.Id).HasDatabaseName("Index_HighLight_Id");

			builder.HasIndex(hl => hl.UserId).HasDatabaseName("Index_HighLight_UserId");

			builder.HasIndex(hl => hl.CreatedAt).HasDatabaseName("Index_HighLight_CreatedAt");

			builder.HasOne(hl => hl.User)
				.WithMany(u => u.HighLights)
				.HasForeignKey(hl => hl.UserId);
			builder.HasMany(hl => hl.Stories)
				.WithOne(s => s.HighLight)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
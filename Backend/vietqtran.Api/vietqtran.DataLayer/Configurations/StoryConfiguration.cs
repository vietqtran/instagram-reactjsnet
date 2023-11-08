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
	public class StoryConfiguration : IEntityTypeConfiguration<Story>
	{
		public void Configure (EntityTypeBuilder<Story> builder)
		{
			builder.ToTable("Stories");

			builder.HasIndex(s => s.Id).HasDatabaseName("Index_Story_Id");

			builder.HasIndex(s => s.UserId).HasDatabaseName("Index_Story_UserId");

			builder.HasIndex(s => s.CreatedAt).HasDatabaseName("Index_PersonalLink_CreatedAt");

			builder.HasOne(s => s.User)
				.WithMany(u => u.Stories)
				.HasForeignKey(s => s.UserId);
			builder.HasOne(s => s.HighLight)
				.WithMany(hl => hl.Stories)
				.HasForeignKey(s => s.HighLightId);
			builder.HasMany(s => s.Messages)
				.WithOne(m => m.Story)
				.HasForeignKey(m => m.StoryId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(s => s.ViewsStory)
				.WithOne(vs => vs.Story)
				.HasForeignKey(vs => vs.StotyId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

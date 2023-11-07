﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Configurations
{
	public class UserConfiguration : IEntityTypeConfiguration<User>
	{
		public void Configure (EntityTypeBuilder<User> builder)
		{
			builder.ToTable("Users");

			builder.HasIndex(u => u.Email).IsUnique().HasDatabaseName("Index_User_Email");
			builder.HasIndex(u => u.PhoneNumber).IsUnique().HasDatabaseName("Index_User_PhoneNumber");
			builder.HasIndex(u => u.UserName).IsUnique().HasDatabaseName("Index_User_UserName");
			builder.HasIndex(u => u.RoleId).HasDatabaseName("Index_User_RoleId");
			builder.HasIndex(u => u.CreatedAt).HasDatabaseName("Index_User_CreatedAt");
			builder.HasIndex(u => u.IsActive).HasDatabaseName("Index_User_IsActive");

			builder.Property(u => u.Email).IsRequired(false);
			builder.Property(u => u.PhoneNumber).IsRequired(false);
			builder.Property(u => u.UserName).IsRequired(true).HasMaxLength(50);
			builder.Property(u => u.Name).IsRequired(true).HasMaxLength(50);
			builder.Property(u => u.Password).IsRequired(true);
			builder.Property(u => u.BirthDay).IsRequired(true);
			builder.Property(u => u.Bio).HasMaxLength(150);

			builder.HasOne(u => u.UserRole)
				.WithMany(r => r.Users)
				.HasForeignKey(u => u.RoleId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(u => u.AccessToken)
				.WithOne(at => at.User)
				.HasForeignKey<AccessToken>(at => at.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(u => u.RefreshToken)
				.WithOne(at => at.User)
				.HasForeignKey<RefreshToken>(at => at.UserId)
				.OnDelete(DeleteBehavior.NoAction);


			builder.Property(u => u.Avatar).IsRequired(false);
			builder.Property(u => u.CreatedAt).HasDefaultValue(DateTime.UtcNow);
			builder.Property(u => u.Bio).IsRequired(false);
		}
	}
}

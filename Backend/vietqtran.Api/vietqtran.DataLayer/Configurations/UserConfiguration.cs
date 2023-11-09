using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Configurations
{
	internal class UserConfiguration : IEntityTypeConfiguration<User>
	{
		public void Configure (EntityTypeBuilder<User> builder)
		{
			builder.ToTable("Users");

			builder.HasIndex(u => u.Email);
			builder.HasIndex(u => u.PhoneNumber);
			builder.HasIndex(u => u.UserName);
			builder.HasIndex(u => u.CreatedAt);
			builder.HasIndex(u => u.IsActive);

			builder.Property(u => u.Email).IsRequired(false);
			builder.Property(u => u.PhoneNumber).IsRequired(false);
			builder.Property(u => u.UserName).IsRequired(true).HasMaxLength(50);
			builder.Property(u => u.Name).IsRequired(true).HasMaxLength(50);
			builder.Property(u => u.Password).IsRequired(true);
			builder.Property(u => u.BirthDay).IsRequired(true);
			builder.Property(u => u.Bio).HasMaxLength(150);

			builder.HasOne(u => u.RefreshToken)
				.WithOne(at => at.User)
				.HasForeignKey<RefreshToken>(at => at.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(u => u.SearchHistory)
				.WithOne(s => s.User)
				.HasForeignKey<SearchHistory>(s => s.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.Messages)
				.WithOne(m => m.User)
				.HasForeignKey(m => m.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.PersonalLinks)
				.WithOne(pl => pl.User)
				.HasForeignKey(pl => pl.UserId)
				.OnDelete(DeleteBehavior.Cascade);
			builder.HasMany(u => u.Stories)
				.WithOne(s => s.User)
				.HasForeignKey(s => s.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.HighLights)
				.WithOne(hl => hl.User)
				.HasForeignKey(hl => hl.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.Followers)
				.WithOne(f => f.Follower)
				.HasForeignKey(f => f.FollowerId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.Followeds)
				.WithOne(f => f.Followed)
				.HasForeignKey(f => f.FollowedId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.RequestUsers)
				.WithOne(bf => bf.RequestUser)
				.HasForeignKey(bf => bf.RequestUserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.ResponseUsers)
				.WithOne(bf => bf.ResponseUser)
				.HasForeignKey(bf => bf.ResponseUserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.Blockers)
				.WithOne(b => b.Blocker)
				.HasForeignKey(b => b.BlockerId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.Blockers)
				.WithOne(b => b.Blocker)
				.HasForeignKey(b => b.BlockerId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.Posts)
				.WithOne(p => p.User)
				.HasForeignKey(p => p.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.ViewsStory)
				.WithOne(vs => vs.User)
				.HasForeignKey(vs => vs.ViewerId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.LikePosts)
				.WithOne(lp => lp.User)
				.HasForeignKey(lp => lp.UserId);
			builder.HasMany(u => u.Comments)
				.WithOne(c => c.User)
				.HasForeignKey(c => c.UserId)
				.OnDelete(DeleteBehavior.Cascade);
			builder.HasMany(u => u.SendNotifications)
				.WithOne(n => n.Sender)
				.HasForeignKey(n => n.SenderId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.ReceiveNotifications)
				.WithOne(n => n.Receiver)
				.HasForeignKey(n => n.UserId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasMany(u => u.Saveds)
				.WithOne(s => s.User)
				.HasForeignKey(s => s.UserId)
				.OnDelete(DeleteBehavior.NoAction);

			builder.Property(u => u.Avatar).IsRequired(false);
			builder.Property(u => u.CreatedAt).HasDefaultValue(DateTime.UtcNow);
			builder.Property(u => u.Bio).IsRequired(false);

		}
	}
}

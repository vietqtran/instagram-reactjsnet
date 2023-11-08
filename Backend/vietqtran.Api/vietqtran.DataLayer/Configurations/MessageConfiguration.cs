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
	public class MessageConfiguration : IEntityTypeConfiguration<Message>
	{
		public void Configure (EntityTypeBuilder<Message> builder)
		{
			builder.ToTable("Messages");

			builder.HasKey(x => x.Id);

			builder.HasIndex(m => m.Id);
			builder.HasIndex(m => m.Content);
			builder.HasIndex(m => m.CreatedAt);
			builder.HasIndex(m => m.ReplyId);
			builder.HasIndex(m => m.StoryId);
			builder.HasIndex(m => m.UserId);

			builder.Property(m => m.PostId).IsRequired(false);
			builder.Property(m => m.StoryId).IsRequired(false);

			builder.HasOne(m => m.User)
				.WithMany(u => u.Messages)
				.HasForeignKey(m => m.UserId);
		}
	}
}

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.MessageModels;

namespace vietqtran.DataLayer.Configurations
{
	public class MessageConfiguration : IEntityTypeConfiguration<Message>
	{
		public void Configure (EntityTypeBuilder<Message> builder)
		{
			builder.ToTable("Messages");

			builder.HasKey(x => x.Id);

			builder.HasIndex(m => m.Id).IsUnique().HasDatabaseName("Index_Message_Id");
			builder.HasIndex(m => m.Content).IsUnique().HasDatabaseName("Index_Message_Content");
			builder.HasIndex(m => m.CreatedAt).IsUnique().HasDatabaseName("Index_Message_CreatedAt");
			builder.HasIndex(m => m.ReplyId).IsUnique().HasDatabaseName("Index_Message_ReplyId");
			builder.HasIndex(m => m.StoryId).IsUnique().HasDatabaseName("Index_Message_StoryId");
			builder.HasIndex(m => m.Sender).IsUnique().HasDatabaseName("Index_Message_Sender");


			builder.HasOne(m => m.User)
				.WithMany()
				.HasForeignKey(m => m.Sender);
		}
	}
}

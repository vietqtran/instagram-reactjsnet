using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.DataLayer.Configurations
{
	internal class UserConversationConfiguration : IEntityTypeConfiguration<UserConversation>
	{
		public void Configure (EntityTypeBuilder<UserConversation> builder)
		{
			builder.ToTable("User_Conversations");

			builder.HasKey(x => x.Id);

			builder.HasIndex(c => c.UserId);

			builder.HasOne(c => c.User)
				.WithMany(u => u.UserConversations)
				.HasForeignKey(c => c.UserId);
			builder.HasOne(c => c.Conversation)
				.WithMany(c => c.UserConversations)
				.HasForeignKey(c => c.ConversationId);
		}
	}
}

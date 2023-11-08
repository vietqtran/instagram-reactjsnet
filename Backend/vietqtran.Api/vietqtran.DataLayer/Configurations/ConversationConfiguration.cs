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
	internal class ConversationConfiguration : IEntityTypeConfiguration<Conversation>
	{
		public void Configure (EntityTypeBuilder<Conversation> builder)
		{
			builder.ToTable("Conversations");

			builder.HasKey(at => at.Id);

		}
	}
}

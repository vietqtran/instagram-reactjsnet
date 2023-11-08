using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.Entities.Relations;
using System.Reflection.Emit;

namespace vietqtran.DataLayer.Configurations
{
	public class ReactMessageConfiguration : IEntityTypeConfiguration<ReactMessage>
	{
		public void Configure (EntityTypeBuilder<ReactMessage> builder)
		{
			builder.ToTable("Reacts_Message");
			builder.HasKey(x => new { x.UserId, x.MessageId, x.Id });

			builder.HasIndex(x => new { x.MessageId, x.UserId }).HasDatabaseName("Index_ReactMessage_MessageId_UserId");

			builder.HasOne(rm => rm.Message)
				.WithMany(m => m.MessageReacts)
				.HasForeignKey(rm => rm.MessageId)
				.OnDelete(DeleteBehavior.NoAction);
			_ = builder.HasOne(rm => rm.User)
				.WithMany(u => u.MessageReacts)
				.HasForeignKey(rm => rm.UserId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

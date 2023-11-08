using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.DataLayer.Configurations
{
	public class BlockConfiguration : IEntityTypeConfiguration<Block>
	{
		public void Configure (EntityTypeBuilder<Block> builder)
		{
			builder.ToTable("User_Blocks");

			builder.HasKey(b => b.Id);

			builder.HasIndex(b => b.BlockerId).HasDatabaseName("Index_Follow_BlockerId");
			builder.HasIndex(b => b.BlockedId).HasDatabaseName("Index_Follow_BlockedId");

			builder.HasOne(b => b.Blocked)
				.WithMany(u => u.Blockeds)
				.HasForeignKey(b => b.BlockedId)
				.OnDelete(DeleteBehavior.NoAction);
			builder.HasOne(b => b.Blocker)
				.WithMany(u => u.Blockers)
				.HasForeignKey(b => b.BlockerId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}

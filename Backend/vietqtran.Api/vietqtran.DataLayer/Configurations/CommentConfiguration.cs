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
	internal class CommentConfiguration : IEntityTypeConfiguration<Comment>
	{
		public void Configure (EntityTypeBuilder<Comment> builder)
		{
			builder.ToTable("Comments");

			builder.HasKey(at => at.Id);

			builder.HasIndex(c => new { c.IsReply, c.ReplyId });

		}
	}
}

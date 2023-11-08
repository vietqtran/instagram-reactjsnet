using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Configurations
{
	internal class SearchHistoryConfiguration : IEntityTypeConfiguration<SearchHistory>
	{
		public void Configure (EntityTypeBuilder<SearchHistory> builder)
		{
			builder.ToTable("Search_Histories");

			builder.HasKey(s => s.Id);

			builder.HasIndex(s => new { s.UserId, s.HashTagId });
			builder.HasIndex(s => new { s.UserId, s.SearchUserId });
			builder.HasIndex(s => new { s.UserId, s.SearchUserId, s.HashTagId });


			builder.HasOne(s => s.SearchUser)
				.WithMany(u => u.SearchHistories)
				.HasForeignKey(s => s.SearchUserId);
			builder.HasOne(s => s.SearchHashTag)
				.WithMany(h => h.SearchHistories)
				.HasForeignKey(s => s.HashTagId);
		}
	}
}

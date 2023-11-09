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
	internal class NotificationConfiguration : IEntityTypeConfiguration<Notification>
	{
		public void Configure (EntityTypeBuilder<Notification> builder)
		{
			builder.ToTable("Notifications");

			builder.HasKey(x => x.Id);

		}
	}
}

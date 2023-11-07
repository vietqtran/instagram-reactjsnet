using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;

namespace vietqtran.DataLayer.Configurations
{
	public class UserRoleConfiguration : IEntityTypeConfiguration<AppUserRole>
	{
		public void Configure (EntityTypeBuilder<AppUserRole> builder)
		{

		}
	}
}

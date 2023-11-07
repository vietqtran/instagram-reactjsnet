using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.User
{
	[Table("Roles")]
	public class AppUserRole : IdentityRole<Guid>
	{
		public override Guid Id { get; set; }
		public string? Description { get; set; }

		public ICollection<AppUser> AppUsers { get; set; }
	}
}

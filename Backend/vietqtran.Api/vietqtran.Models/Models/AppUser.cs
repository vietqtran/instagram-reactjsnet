using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Models;

namespace vietqtran.Models.User
{
	public class AppUser : IdentityUser<Guid>
	{
		public string? Name { get; set; }
		public string? Password { get; set; }
		public DateTime Dob { get; set; }

		[InverseProperty("User")]
		public AccessToken AccessTokens { get; set; }
		[InverseProperty("User")]
		public RefreshToken RefreshTokens { get; set; }
	}
}

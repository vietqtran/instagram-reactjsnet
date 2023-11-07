using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Models;

namespace vietqtran.Models.User
{
	[Table("Users")]
	public class AppUser : IdentityUser<Guid>
	{
		[Required]
		[StringLength(50)]
		public string Name { get; set; }

		[Required]
		[StringLength(50)]
		public override string UserName { get; set; }

		[Required]
		[StringLength(100, MinimumLength = 6)]
		public string Password { get; set; }

		[Required]
		[DataType(DataType.Date)]
		public DateTime BirthDay { get; set; }

		[ForeignKey("AppUserRole")]
		public Guid RoleId { get; set; }

		public bool IsPrivateAccount { get; set; } = false;

		[DataType(DataType.Date)]
		public DateTime CreatedAt { get; set; }

		[Url]
		public string Avatar { get; set; }

		public bool IsActive { get; set; } = false;

		[DataType(DataType.DateTime)]
		public DateTime LastOnlineTime { get; set; }

		[DataType(DataType.DateTime)]
		public DateTime LastOfflineTime { get; set; }

		public bool Gender { get; set; } = false;

		public string Bio { get; set; }

		public AppUserRole AppUserRole { get; set; }
		[InverseProperty("User")]
		public AccessToken AccessTokens { get; set; }
		[InverseProperty("User")]
		public RefreshToken RefreshTokens { get; set; }
	}
}

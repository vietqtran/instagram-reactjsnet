using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;

namespace vietqtran.Models.Models
{
	public class RefreshToken
	{
		[Key]
		public Guid Id { get; set; }
		public string Token { get; set; }

		[ForeignKey("UserId")]
		public Guid UserId { get; set; }
		public AppUser User { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.Models.Entities
{
	public class RefreshToken
	{
		public long Id { get; set; }
		public string Token { get; set; }
		public DateTime Exp { get; set; }
		public Guid UserId { get; set; }


		//! Reference
		public User User { get; set; }
	}
}

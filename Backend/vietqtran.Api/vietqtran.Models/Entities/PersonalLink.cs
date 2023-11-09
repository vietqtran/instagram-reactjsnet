using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities
{
	public class PersonalLink
	{
		public long Id { get; set; }
		public Guid UserId { get; set; }
		[Url]
		public string Link { get; set; }


		//! Reference
		public User User { get; set; }
	}
}

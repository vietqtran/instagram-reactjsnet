using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class BestFriend
	{
		public Guid Id { get; set; }
		public Guid RequestUserId { get; set; }
		public Guid ResponseUserId { get; set; }
		public bool IsConfirmed { get; set; }



		//! Reference
		public User RequestUser { get; set; }
		public User ResponseUser { get; set; }
	}
}

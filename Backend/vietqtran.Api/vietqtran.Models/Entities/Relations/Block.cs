using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class Block
	{
		public Guid Id { get; set; }
		public Guid BlockerId { get; set; }
		public Guid BlockedId { get; set; }
		public DateTime CreatedAt { get; set; }


		//! Reference 
		public User Blocker { get; set; }
		public User Blocked { get; set; }
	}
}

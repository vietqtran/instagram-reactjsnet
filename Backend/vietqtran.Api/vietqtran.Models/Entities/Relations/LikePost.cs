using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class LikePost
	{
		public Guid PostId { get; set; }
		public Guid UserId { get; set; }



		//! Reference
		public Post Post { get; set; }
		public User User { get; set; }
	}
}

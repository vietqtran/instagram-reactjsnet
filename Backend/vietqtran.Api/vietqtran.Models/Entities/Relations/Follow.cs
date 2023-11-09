using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class Follow
	{
		public long Id { get; set; }
		public Guid FollowedId { get; set; }
		public Guid FollowerId { get; set; }
		public DateTime CreatedAt { get; set; }
		public bool IsConfirmed { get; set; }


		//! Reference 
		public User Follower { get; set; }
		public User Followed { get; set; }
	}
}

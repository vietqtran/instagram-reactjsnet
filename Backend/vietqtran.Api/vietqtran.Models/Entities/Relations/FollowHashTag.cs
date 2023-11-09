using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class FollowHashTag
	{
		public long Id { get; set; }
		public Guid UserId { get; set; }
		public long HashTagId { get; set; }


		//! Reference

		public User User { get; set; }
		public HashTag HashTag { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class PostHashTag
	{
		public long Id { get; set; }
		public long PostId { get; set; }
		public long HashTagId { get; set; }


		//! Reference
		public Post Post { get; set; }
		public HashTag HashTag { get; set; }
	}
}

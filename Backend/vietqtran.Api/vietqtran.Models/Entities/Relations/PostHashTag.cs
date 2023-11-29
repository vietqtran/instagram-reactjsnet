using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class PostHashTag
	{
		public Guid Id { get; set; }
		public Guid PostId { get; set; }
		public Guid HashTagId { get; set; }


		//! Reference
		public Post Post { get; set; }
		public HashTag HashTag { get; set; }
	}
}

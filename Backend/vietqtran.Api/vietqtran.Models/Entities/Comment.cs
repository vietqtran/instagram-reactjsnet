﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities
{
	public class Comment
	{
		public long Id { get; set; }
		public string Content { get; set; }
		public Guid UserId { get; set; }
		public long PostId { get; set; }
		public DateTime? ModifiedAt { get; set; }
		public bool? IsReply { get; set; }
		public long? ReplyId { get; set; }


		//! Reference
		public User User { get; set; }
		public Post Post { get; set; }
	}
}

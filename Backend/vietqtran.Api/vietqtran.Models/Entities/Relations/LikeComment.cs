using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class LikeComment
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		public Guid CommentId { get; set; }



		//! Reference

		public User User { get; set; }
		public Comment Comment { get; set; }
	}
}

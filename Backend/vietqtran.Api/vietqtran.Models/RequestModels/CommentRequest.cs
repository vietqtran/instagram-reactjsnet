using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.RequestModels
{
	public class CommentRequest
	{
		public string Content { get; set; }
		public Guid UserId { get; set; }
		public Guid PostId { get; set; }
		public DateTime? ModifiedAt { get; set; }
		public bool? IsReply { get; set; }
		public Guid? ReplyId { get; set; }
	}
}

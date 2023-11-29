using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Models.Entities
{
	public class Comment
	{
		public Guid Id { get; set; }
		public string Content { get; set; }
		public Guid UserId { get; set; }
		public Guid PostId { get; set; }
		public DateTime? ModifiedAt { get; set; }
		public bool? IsReply { get; set; }
		public Guid? ReplyId { get; set; }


		//! Reference
		public User User { get; set; }
		public Post Post { get; set; }
		public ICollection<LikeComment> LikeComments { get; set; }
	}
}

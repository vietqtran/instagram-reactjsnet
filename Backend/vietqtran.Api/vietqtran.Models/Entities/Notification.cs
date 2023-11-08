using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities
{
	public class Notification
	{
		public Guid Id { get; set; }
		public bool IsRead { get; set; } = false;
		public NotificationType Type { get; set; }
		public DateTime CreateAt { get; set; } = DateTime.Now;
		public Guid SenderId { get; set; }
		public Guid UserId { get; set; }
		public string Content { get; set; }
		public Guid? PostId { get; set; }
		public Guid? CommentId { get; set; }
		public Guid? StoryId { get; set; }



		//! Reference
		public User Sender { get; set; }
		public User Receiver { get; set; }
	}
}

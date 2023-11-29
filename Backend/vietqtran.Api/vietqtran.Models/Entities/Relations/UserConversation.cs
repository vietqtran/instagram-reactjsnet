using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class UserConversation
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		public Guid ConversationId { get; set; }
		public DateTime DeletedAt { get; set; } = DateTime.UtcNow;
		public bool IsAllowedNotification { get; set; } = true;

		//! Reference

		public User User { get; set; }
		public Conversation Conversation { get; set; }
	}
}

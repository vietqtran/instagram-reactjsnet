using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Models.Entities
{
	public class Conversation
	{
		public long Id { get; set; }
		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

		//! Reference

		public ICollection<UserConversation> UserConversations { get; set; }
		public ICollection<Message> Messages { get; set; }
	}
}

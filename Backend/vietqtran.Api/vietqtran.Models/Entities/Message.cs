using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Enums;
using vietqtran.Models.Enums;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Models.Entities
{
	public class Message
	{
		//! Common
		public long Id { get; set; }
		public MessageType MessageType { get; set; }
		public Guid UserId { get; set; }
		public long ConversationId { get; set; }
		public DateTime CreatedAt { get; set; }
		public bool IsDeleted { get; set; }
		public MessageStatus Status { get; set; }
		public bool IsReply { get; set; }
		public long ReplyId { get; set; }

		//! Particilar

		public string Content { get; set; }
		public long? PostId { get; set; }
		public long? StoryId { get; set; }
		public string Emoji { get; set; }
		[Url]
		public string FileUrl { get; set; }


		//! Refrence
		public User User { get; set; }
		public ICollection<ReactMessage> MessageReacts { get; set; }
		public Conversation Conversation { get; set; }
	}
}

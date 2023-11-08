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
		public Guid Id { get; set; }
		public MessageType MessageType { get; set; }
		public Guid UserId { get; set; }
		public Guid ConversationId { get; set; }
		public DateTime CreatedAt { get; set; }
		public bool IsDeleted { get; set; }
		public MessageStatus Status { get; set; }
		public bool IsReply { get; set; }
		public Guid ReplyId { get; set; }

		//! Particilar

		public string Content { get; set; }
		public Guid? PostId { get; set; }
		public Guid? StoryId { get; set; }
		public string Emoji { get; set; }
		[Url]
		public string FileUrl { get; set; }


		//! Refrence
		public User User { get; set; }
		public ICollection<ReactMessage> MessageReacts { get; set; }
		public Conversation Conversation { get; set; }
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Enums;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities.MessageModels
{
	public class SharePostMEssage : IMessage
	{
		public Guid Id { get; set; }

		public MessageType MessageType { get; set; } = MessageType.SharePost;

		public Guid Sender { get; set; }

		public DateTime CreatedAt { get; set; }

		public bool IsDeleted { get; set; }

		public MessageStatus Status { get; set; }

		public bool IsReply { get; set; }

		public Guid ReplyId { get; set; }

		public Guid PostId { get; set; }
	}
}

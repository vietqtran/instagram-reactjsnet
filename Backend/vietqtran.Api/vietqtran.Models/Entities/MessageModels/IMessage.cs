using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Enums;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities.MessageModels
{
	public interface IMessage
	{
		Guid Id { get; set; }

		MessageType MessageType { get; set; }

		Guid Sender { get; set; }

		DateTime CreatedAt { get; set; }

		bool IsDeleted { get; set; }

		MessageStatus Status { get; set; }

		bool IsReply { get; set; }

		Guid ReplyId { get; set; }
	}
}

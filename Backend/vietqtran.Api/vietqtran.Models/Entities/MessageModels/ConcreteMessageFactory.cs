using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Enums;

namespace vietqtran.Models.Entities.MessageModels
{
	public class ConcreteMessageFactory : MessageFactory
	{
		public override IMessage CreateMessage (MessageType messageType)
		{
			switch (messageType) {
				case MessageType.File:
					return new FileMessage();
				case MessageType.Text:
					return new TextMessage();
				case MessageType.Icon:
					return new IconMessage();
				case MessageType.SharePost:
					return new SharePostMEssage();
				case MessageType.ReplyStory:
					return new ReplyStoryMessage();
				default:
					throw new Exception("Invalid message type");
			}
		}
	}
}

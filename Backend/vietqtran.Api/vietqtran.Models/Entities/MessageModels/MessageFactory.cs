using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Enums;

namespace vietqtran.Models.Entities.MessageModels
{
	public abstract class MessageFactory
	{
		public abstract IMessage CreateMessage (MessageType messageType);
	}
}

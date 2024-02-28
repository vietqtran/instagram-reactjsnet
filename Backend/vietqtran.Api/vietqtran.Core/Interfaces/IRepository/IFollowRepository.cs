using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface IFollowRepository
	{
		Task<bool> Follow (Guid SourceUserId, Guid DestinationUserId);
		Task<bool> UnFollow (Guid SourceUserId, Guid DestinationUserId);
		Task<IEnumerable<Follow>> GetFollows ( );
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Core.Interfaces.IService
{
	public interface IFollowService
	{
		Task<bool> FollowUserAsync (Guid SourceUserId, Guid DestinationUserId);
		Task<bool> UnFollowUserAsync (Guid SourceUserId, Guid DestinationUserId);
		Task<IEnumerable<Follow>> GetFollows ( );
	}
}

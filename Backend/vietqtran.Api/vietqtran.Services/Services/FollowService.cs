using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Services.Services
{
	public class FollowService : IFollowService
	{
		private readonly IFollowRepository _followRepository;

		public FollowService (IFollowRepository followRepository)
		{
			_followRepository = followRepository;
		}

		public async Task<bool> FollowUserAsync (Guid SourceUserId, Guid DestinationUserId)
		{
			var result = await _followRepository.Follow(SourceUserId, DestinationUserId);
			return result;
		}

		public async Task<IEnumerable<Follow>> GetFollows ( )
		{
			var result = await _followRepository.GetFollows();
			return result;
		}

		public async Task<bool> UnFollowUserAsync (Guid SourceUserId, Guid DestinationUserId)
		{
			var result = await _followRepository.UnFollow(SourceUserId, DestinationUserId);
			return result;
		}
	}
}

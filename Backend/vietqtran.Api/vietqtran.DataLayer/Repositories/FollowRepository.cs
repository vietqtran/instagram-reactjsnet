using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.DataAccess.Data;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.DataLayer.Repositories
{
	public class FollowRepository : IFollowRepository
	{
		private readonly DataContext _dataContext;

		public FollowRepository (DataContext dataContext)
		{
			_dataContext = dataContext;
		}

		public async Task<bool> Follow (Guid SourceUserId, Guid DestinationUserId)
		{
			var follow = await _dataContext.Follows.Where(x => x.FollowerId == SourceUserId && x.FollowedId == DestinationUserId).FirstOrDefaultAsync();

			if (follow != null)
			{
				return false;
			}

			var newFollow = new Follow
			{
				CreatedAt = DateTime.Now,
				FollowedId = SourceUserId,
				FollowerId = DestinationUserId,
				IsConfirmed = true
			};

			await _dataContext.Follows.AddAsync(newFollow);

			return await _dataContext.SaveChangesAsync() > 0;
		}

		public async Task<IEnumerable<Follow>> GetFollows ( )
		{
			return await _dataContext.Follows.ToListAsync();
		}

		public async Task<bool> UnFollow (Guid UserSource, Guid UserDestination)
		{
			var follow = await _dataContext.Follows.Where(x => x.FollowerId == UserDestination && x.FollowedId == UserSource).FirstOrDefaultAsync();

			if (follow == null)
			{
				return false;
			}

			_dataContext.Follows.Remove(follow);

			return await _dataContext.SaveChangesAsync() > 0;
		}
	}
}

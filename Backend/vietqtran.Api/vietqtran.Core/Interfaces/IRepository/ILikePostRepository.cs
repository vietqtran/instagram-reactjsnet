using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface ILikePostRepository
	{
		Task<bool> AddLikePost (Guid postId, Guid userId);

		Task<bool> RemoveLikePost (Guid postId, Guid userId);

		Task<ICollection<User>> GetLikedPostUser (Guid postId);
	}
}

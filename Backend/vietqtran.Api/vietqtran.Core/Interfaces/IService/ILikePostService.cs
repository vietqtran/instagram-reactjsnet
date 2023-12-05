using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.ViewModels;

namespace vietqtran.Core.Interfaces.IService
{
	public interface ILikePostService
	{
		Task<bool> AddLikePost (Guid postId, Guid userId);

		Task<bool> RemoveLikePost (Guid postId, Guid userId);

		Task<ICollection<AppUserVM>?> GetLikedPostUser (Guid postId);
	}
}

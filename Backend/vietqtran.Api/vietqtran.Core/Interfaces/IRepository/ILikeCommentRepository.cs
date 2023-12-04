using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.ViewModels;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface ILikeCommentRepository
	{
		int GetLikeCommentCountAsync (Guid commentId);

		Task<bool> AddLikeComment (Guid commentId, Guid userId);

		Task<bool> RemoveLikeComment (Guid commentId, Guid userId);

		Task<ICollection<User>> GetLikedCommentUser (Guid commentId);

	}
}

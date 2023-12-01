using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.ResponseModels;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface ICommentRepository
	{
		Task<IEnumerable<Comment>> GetAllCommentsByPostId (Guid postId);

		Task<CommentResponse> AddComment (Comment comment);
	}
}

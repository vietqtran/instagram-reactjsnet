using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.RequestModels;
using vietqtran.Models.ResponseModels;

namespace vietqtran.Core.Interfaces.IService
{
	public interface ICommentService
	{
		Task<IEnumerable<CommentResponse>> GetAllCommentsByPostId (Guid postId);

		Task<CommentResponse> AddComment (CommentRequest commentRequest);
	}
}

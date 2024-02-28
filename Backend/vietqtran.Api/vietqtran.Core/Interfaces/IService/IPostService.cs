// Ignore Spelling: vietqtran

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.RequestModels;
using vietqtran.Models.ResponseModels;

namespace vietqtran.Core.Interfaces.IService
{
	public interface IPostService
	{
		Task<IEnumerable<PostResponse>?> GetAllPosts ( );
		Task<PostResponse> GetPost (Guid id);
		Task<IEnumerable<PostResponse>?> GetPostByUsername (string username);

		Task<PostResponse?> AddPost (PostRequest post);

		Task<bool> DeletePost (Guid id);
	}
}

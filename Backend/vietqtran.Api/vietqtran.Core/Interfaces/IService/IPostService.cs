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
		public Task<IEnumerable<PostResponse>> GetAllPosts ( );
		public Task<Post> GetPost (int id);
		public Task<PostResponse?> AddPost (PostRequest post);
		public Task<bool> DeletePost (Guid id);
	}
}

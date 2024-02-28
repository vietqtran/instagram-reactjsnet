using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.ResponseModels;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface IPostRepository
	{
		Task<ICollection<Post>> GetAllPosts ( );
		Task<Post> GetPost (Guid id);
		Task<ICollection<Post>> GetPostByUsername (string username);

		Task<Guid> AddPost (Post post);

		Task<bool> DeletePost (Guid id);

		Task<bool> AddImages (ICollection<string> postImages, Guid postId);
		Task<ICollection<string>> GetImages (Guid postId);
	}
}

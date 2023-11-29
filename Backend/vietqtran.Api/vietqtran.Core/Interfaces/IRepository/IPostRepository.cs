using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface IPostRepository
	{
		public Task<ICollection<Post>> GetAllPosts ( );
		public Task<Post> GetPost (Guid id);
		public Task<ICollection<Post>> GetPostByUserId (Guid userId);

		public Task<Guid> AddPost (Post post);

		public Task<bool> DeletePost (Guid id);

		public Task<bool> AddImages (ICollection<string> postImages, Guid postId);
		public Task<ICollection<string>> GetImages (Guid postId);
	}
}

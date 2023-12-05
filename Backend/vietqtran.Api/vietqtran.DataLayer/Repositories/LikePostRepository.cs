using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.DataAccess.Data;
using vietqtran.Models.Entities;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.DataLayer.Repositories
{
	public class LikePostRepository : ILikePostRepository
	{
		private readonly DataContext _context;

		public LikePostRepository (DataContext dataContext)
		{
			_context = dataContext;
		}

		public async Task<bool> AddLikePost (Guid postId, Guid userId)
		{
			try {
				var likePost = _context.LikePosts.FirstOrDefault(x => x.PostId == postId && x.UserId == userId);
				if (likePost != null) {
					return false;
				}
				_context.LikePosts.Add(new LikePost() { PostId = postId, UserId = userId });
				var result = await _context.SaveChangesAsync();

				return result > 0;
			} catch (Exception) {
				return false;
			}
		}

		public async Task<ICollection<User>> GetLikedPostUser (Guid postId)
		{
			try {
				var users = await _context.LikePosts.Where(x => x.PostId == postId).Select(x => x.User).ToListAsync();
				if (users == null) {
					return null;
				}
				return users;
			} catch (Exception) {
				return null;
			}
		}

		public async Task<bool> RemoveLikePost (Guid postId, Guid userId)
		{
			try {
				var likePost = _context.LikePosts.FirstOrDefault(x => x.PostId == postId && x.UserId == userId);
				if (likePost == null) {
					return false;
				}
				_context.LikePosts.Remove(likePost);
				var result = await _context.SaveChangesAsync();

				return result > 0;
			} catch (Exception) {
				return false;
			}
		}
	}
}

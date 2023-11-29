using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.DataAccess.Data;
using vietqtran.Models.Entities;

namespace vietqtran.DataLayer.Repositories
{
	public class PostRepository : IPostRepository
	{
		private readonly DataContext _dataContext;

		public PostRepository (DataContext dataContext)
		{
			_dataContext = dataContext;
		}

		public async Task<bool> AddImages (ICollection<string> images, Guid postId)
		{
			try {
				var postImages = images.Select(link => new PostImage { Link = link, PostId = postId });
				await _dataContext.PostImages.AddRangeAsync(postImages);
				var rowsAffected = await _dataContext.SaveChangesAsync();
				return rowsAffected > 0;
			} catch (Exception e) {
				return false;
			}
		}

		public async Task<Guid> AddPost (Post post)
		{
			try {
				await _dataContext.AddAsync(post);
				var rowsAffected = await _dataContext.SaveChangesAsync();
				if (rowsAffected > 0) {
					return post.Id;
				}
				return Guid.Empty;
			} catch (Exception e) {
				return Guid.Empty;
			}
		}

		public async Task<bool> DeletePost (Guid id)
		{
			try {
				var post = _dataContext.Posts.Find(id);
				_dataContext.Posts.Remove(post);
				var rowsAffected = await _dataContext.SaveChangesAsync();
				return rowsAffected > 0;
			} catch (Exception) {
				return false;
			}
		}

		public async Task<ICollection<Post>> GetAllPosts ( )
		{
			try {
				var posts = await _dataContext.Posts
					.Include(p => p.PostImages)
					.Include(p => p.User)
					.ToListAsync();
				return posts;
			} catch (Exception e) {
				return null;
			}
		}

		public async Task<ICollection<string>> GetImages (Guid postId)
		{
			try {
				var images = _dataContext.PostImages.Where(pi => pi.PostId == postId).Select(pi => pi.Link);
				return await images.ToListAsync();
			} catch (Exception e) {
				return null;
			}
		}

		public Task<Post> GetPost (int id)
		{
			throw new NotImplementedException();
		}
	}
}

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
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
	public class LikeCommentRepository : ILikeCommentRepository
	{
		private readonly DataContext _context;

		public LikeCommentRepository (DataContext dataContext)
		{
			_context = dataContext;
		}

		public async Task<bool> AddLikeComment (Guid commentId, Guid userId)
		{
			try {
				var likeComment = _context.LikeComments.FirstOrDefault(x => x.CommentId == commentId && x.UserId == userId);

				if (likeComment != null) {
					return false;
				}

				await _context.LikeComments.AddAsync(new LikeComment
				{
					CommentId = commentId,
					UserId = userId
				});

				var rowEffect = await _context.SaveChangesAsync();

				return rowEffect > 0;
			} catch (Exception ex) {
				return false;
			}
		}

		public int GetLikeCommentCountAsync (Guid commentId)
		{
			try {
				var amount = _context.LikeComments.Where(x => x.CommentId == commentId).Count();
				return amount;
			} catch (Exception ex) {
				return 0;
			}
		}

		public async Task<ICollection<User>> GetLikedCommentUser (Guid commentId)
		{
			try {
				var users = await (from likeComment in _context.LikeComments
							    join user in _context.Users on likeComment.UserId equals user.Id
							    where likeComment.CommentId == commentId
							    select user).ToListAsync();
				return users;
			} catch (Exception ex) {
				return null;
			}
		}

		public async Task<bool> RemoveLikeComment (Guid commentId, Guid userId)
		{
			try {
				var likeComment = await _context.LikeComments.FirstOrDefaultAsync(x => x.CommentId == commentId && x.UserId == userId);

				if (likeComment == null) {
					return false;
				}

				_context.LikeComments.Remove(likeComment);
				var rowEffect = await _context.SaveChangesAsync();

				return rowEffect > 0;
			} catch (Exception ex) {
				return false;
			}
		}
	}
}

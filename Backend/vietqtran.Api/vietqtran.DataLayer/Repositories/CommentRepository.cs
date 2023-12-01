using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.DataAccess.Data;
using vietqtran.Models.Entities;
using vietqtran.Models.ResponseModels;
using vietqtran.Models.ViewModels;

namespace vietqtran.DataLayer.Repositories
{
	public class CommentRepository : ICommentRepository
	{
		private readonly DataContext _dataContext;
		private readonly IMapper _mapper;

		public CommentRepository (DataContext dataContext, IMapper mapper)
		{
			_dataContext = dataContext;
			_mapper = mapper;
		}

		public async Task<CommentResponse> AddComment (Comment comment)
		{
			try {
				await _dataContext.Comments.AddAsync(comment);
				await _dataContext.SaveChangesAsync();

				var commetResponse = _mapper.Map<CommentResponse>(comment);
				var user = await _dataContext.Users.FindAsync(comment.UserId);
				commetResponse.User = _mapper.Map<AppUserVM>(user);

				return commetResponse;
			} catch (Exception ex) {
				return null;
			}
		}

		public async Task<IEnumerable<Comment>> GetAllCommentsByPostId (Guid postId)
		{
			try {
				var comments = await _dataContext.Comments.Where(c => c.PostId == postId)
					.Include(c => c.User)
					.Include(c => c.LikeComments)
					.ToListAsync();
				return comments;
			} catch (Exception ex) {
				return null;
			}
		}
	}
}

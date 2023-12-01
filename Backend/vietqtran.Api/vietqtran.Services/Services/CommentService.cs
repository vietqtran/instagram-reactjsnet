using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.Entities;
using vietqtran.Models.RequestModels;
using vietqtran.Models.ResponseModels;
using vietqtran.Models.ViewModels;

namespace vietqtran.Services.Services
{
	public class CommentService : ICommentService
	{
		private readonly ICommentRepository _commentRepository;
		private readonly IMapper _mapper;

		public CommentService (ICommentRepository commentRepository, IMapper mapper)
		{
			_commentRepository = commentRepository;
			_mapper = mapper;
		}

		public async Task<IEnumerable<CommentResponse>> GetAllCommentsByPostId (Guid postId)
		{
			var comments = await _commentRepository.GetAllCommentsByPostId(postId);

			if (comments == null) {
				return null;
			}

			return comments.Select(cmt => new CommentResponse
			{
				Id = cmt.Id,
				Content = cmt.Content,
				UserId = cmt.UserId,
				PostId = cmt.PostId,
				ModifiedAt = cmt.ModifiedAt,
				IsReply = cmt.IsReply,
				ReplyId = cmt.ReplyId,
				User = _mapper.Map<AppUserVM>(cmt.User),
				LikeComments = cmt.LikeComments
			});
		}

		public async Task<CommentResponse> AddComment (CommentRequest commentRequest)
		{
			var comment = _mapper.Map<Comment>(commentRequest);
			comment.ModifiedAt = DateTime.UtcNow;
			var commentResponse = await _commentRepository.AddComment(comment);

			if (commentResponse != null) {
				return commentResponse;
			}

			return null;
		}
	}
}

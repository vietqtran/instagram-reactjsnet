using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.ViewModels;

namespace vietqtran.Services.Services
{
	public class LikeCommentService : ILikeCommentService
	{
		private readonly ILikeCommentRepository _likeCommentRepository;
		private readonly IMapper _mapper;

		public LikeCommentService (ILikeCommentRepository likeCommentRepository, IMapper mapper)
		{
			_likeCommentRepository = likeCommentRepository;
			_mapper = mapper;
		}

		public async Task<bool> AddLikeComment (Guid commentId, Guid userId)
		{
			return await _likeCommentRepository.AddLikeComment(commentId, userId);
		}

		public int GetLikeCommentCountAsync (Guid commentId)
		{
			return _likeCommentRepository.GetLikeCommentCountAsync(commentId);
		}

		public async Task<ICollection<AppUserVM>?> GetLikedCommentUser (Guid commentId)
		{
			var users = await _likeCommentRepository.GetLikedCommentUser(commentId);

			if (users == null) {
				return null;
			}

			var userVMs = users.Select(user => _mapper.Map<AppUserVM>(user));

			return userVMs.ToList();
		}

		public async Task<bool> RemoveLikeComment (Guid commentId, Guid userId)
		{
			return await _likeCommentRepository.RemoveLikeComment(commentId, userId);
		}
	}
}

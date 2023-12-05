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
	public class LikePostService : ILikePostService
	{
		private readonly ILikePostRepository _likePostRepository;
		private readonly IMapper _mapper;

		public LikePostService (ILikePostRepository likePostRepository, IMapper mapper)
		{
			_likePostRepository = likePostRepository;
			_mapper = mapper;
		}

		public async Task<bool> AddLikePost (Guid postId, Guid userId)
		{
			return await _likePostRepository.AddLikePost(postId, userId);
		}

		public async Task<ICollection<AppUserVM>?> GetLikedPostUser (Guid postId)
		{
			var users = await _likePostRepository.GetLikedPostUser(postId);
			if (users == null) {
				return null;
			}
			return _mapper.Map<ICollection<AppUserVM>>(users);
		}

		public async Task<bool> RemoveLikePost (Guid postId, Guid userId)
		{
			return await _likePostRepository.RemoveLikePost(postId, userId);
		}
	}
}

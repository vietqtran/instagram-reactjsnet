using AutoMapper;
using Microsoft.EntityFrameworkCore;
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
	public class PostService : IPostService
	{
		private readonly IPostRepository _postRepository;
		private readonly IMapper _mapper;

		public PostService (IPostRepository postRepository, IMapper mapper)
		{
			_postRepository = postRepository;
			_mapper = mapper;
		}

		public async Task<PostResponse?> AddPost (PostRequest postRequest)
		{
			var newPost = new Post
			{
				UserId = postRequest.UserId,
				Title = postRequest.Title,
				Visibility = postRequest.Visibility,
			};

			var post = _mapper.Map<Post>(newPost);

			post.CreatedAt = DateTime.UtcNow;

			var postId = await _postRepository.AddPost(post);

			if (postId != Guid.Empty) {
				var postResponse = _mapper.Map<PostResponse>(post);
				var result = await _postRepository.AddImages(postRequest.PostImages, postId);
				if (result == true) {
					postResponse.PostImages = postRequest.PostImages;
					return postResponse;
				}
			}

			return null;
		}

		public async Task<bool> DeletePost (Guid id)
		{
			var result = await _postRepository.DeletePost(id);

			return result;
		}

		public async Task<IEnumerable<PostResponse>> GetAllPosts ( )
		{
			var posts = _postRepository.GetAllPosts();

			if (posts.Result == null) return null;

			var result = posts.Result.Select(post => new PostResponse
			{
				CreatedAt = post.CreatedAt,
				Id = post.Id,
				IsPinned = post.IsPinned,
				Title = post.Title,
				UserId = post.UserId,
				Visibility = post.Visibility,
				PostImages = post.PostImages.Select(pi => pi.Link).ToList(),
				User = _mapper.Map<AppUserVM>(post.User)
			});

			return result;
		}

		public Task<Post> GetPost (int id)
		{
			throw new NotImplementedException();
		}
	}
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.ViewModels;

namespace vietqtran.Api.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class LikePostController : ControllerBase
	{
		private readonly ILikePostService _likePostService;

		public LikePostController (ILikePostService likePostService)
		{
			_likePostService = likePostService;
		}

		[HttpPost]
		public async Task<IActionResult> AddLikePost (Guid postId, Guid userId)
		{
			var result = await _likePostService.AddLikePost(postId, userId);
			return Ok(result);
		}

		[HttpDelete]
		public async Task<IActionResult> RemoveLikePost (Guid postId, Guid userId)
		{
			var result = await _likePostService.RemoveLikePost(postId, userId);
			return Ok(result);
		}

		[HttpGet("users")]
		public async Task<IActionResult> GetLikedPostUser (Guid postId)
		{
			var users = await _likePostService.GetLikedPostUser(postId);
			if (users == null) {
				return Ok();
			}
			return Ok(users);
		}
	}
}

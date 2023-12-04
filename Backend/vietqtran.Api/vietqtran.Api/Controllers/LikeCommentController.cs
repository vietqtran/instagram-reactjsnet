using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IService;

namespace vietqtran.Api.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class LikeCommentController : ControllerBase
	{
		private readonly ILikeCommentService _likeCommentService;

		public LikeCommentController (ILikeCommentService likeCommentService)
		{
			_likeCommentService = likeCommentService;
		}

		[HttpPost]
		public async Task<IActionResult> LikeComment (Guid commentId, Guid userId)
		{
			var result = await _likeCommentService.AddLikeComment(commentId, userId);
			return Ok(result);
		}

		[HttpDelete]
		public async Task<IActionResult> UnlikeComment (Guid commentId, Guid userId)
		{
			var result = await _likeCommentService.RemoveLikeComment(commentId, userId);
			return Ok(result);
		}

		[HttpGet("user")]
		public async Task<IActionResult> GetLikeComment (Guid commentId)
		{
			var result = await _likeCommentService.GetLikedCommentUser(commentId);
			return Ok(result);
		}

		[HttpGet("count")]
		public IActionResult GetCountLikeComment (Guid commentId)
		{
			var result = _likeCommentService.GetLikeCommentCountAsync(commentId);
			return Ok(result);
		}
	}
}

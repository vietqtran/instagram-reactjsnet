using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.RequestModels;

namespace vietqtran.Api.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class CommentController : ControllerBase
	{
		private readonly ICommentService _commentService;

		public CommentController (ICommentService commentService)
		{
			_commentService = commentService;
		}

		[HttpGet("postId")]
		public async Task<IActionResult> GetCommentsByPostId (Guid postId)
		{
			var result = await _commentService.GetAllCommentsByPostId(postId);
			return Ok(result);
		}

		[HttpPost]
		public async Task<IActionResult> AddComment (CommentRequest commentRequest)
		{
			var result = await _commentService.AddComment(commentRequest);
			return Ok(result);
		}
	}
}

using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.Entities;
using vietqtran.Models.RequestModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace vietqtran.Api.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class PostController : ControllerBase
	{
		private readonly IPostService _postService;

		public PostController (IPostService postService)
		{
			_postService = postService;
		}

		// GET: api/<PostController>
		[HttpGet]
		public async Task<IActionResult> GetAllPost ( )
		{
			var result = await _postService.GetAllPosts();
			if (result == null) return NotFound();
			return Ok(result);
		}

		// GET api/<PostController>/5
		[HttpGet("{id}")]
		public async Task<IActionResult> GetPost (Guid id)
		{
			return Ok();
		}

		// POST api/<PostController>
		[HttpPost]
		public async Task<IActionResult> AddPost (PostRequest postRequest)
		{
			var result = await _postService.AddPost(postRequest);

			return Ok(result);
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeletePost (Guid id)
		{
			var isDeleted = await _postService.DeletePost(id);
			return Ok(isDeleted ? "Delete Succeed" : "Delete Failed");
		}
	}
}

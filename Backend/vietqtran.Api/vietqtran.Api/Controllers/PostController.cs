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

		/// <summary>
		/// Gets all posts
		/// </summary>
		/// <returns>List of posts</returns>
		[HttpGet]
		public async Task<IActionResult> GetAllPost ( )
		{
			var result = await _postService.GetAllPosts();
			if (result == null) return NotFound();
			return Ok(result);
		}

		/// <summary>
		/// Gets a post by Id
		/// </summary>
		/// <param name="id">Id of the post</param>
		/// <returns>Detailed information of the post</returns>
		/// <response code="200">Returns the post information</response>
		/// <response code="404">Post not found</response>
		[HttpGet("{id}")]
		public async Task<IActionResult> GetPostById (Guid id)
		{
			var result = await _postService.GetPost(id);

			return Ok(result);
		}

		/// <summary> 
		/// Gets posts by user Id
		/// </summary>
		/// <param name="userId">Id of the user</param>
		/// <returns>List of posts of the user</returns> 
		[HttpGet("user")]
		public async Task<IActionResult> GetPostByUsername (Guid userId)
		{
			var result = await _postService.GetPostByUserId(userId);
			if (result == null) return NotFound();
			return Ok(result);
		}

		/// <summary>
		/// Adds a new post to the system.
		/// </summary>
		/// <param name="postRequest">The request model containing data for the new post.</param>
		/// <returns>
		/// An asynchronous task representing the HTTP response. 
		/// Returns an HTTP 200 (OK) status with the result of the post creation operation.
		/// </returns>
		[HttpPost]
		public async Task<IActionResult> AddPost (PostRequest postRequest)
		{
			var result = await _postService.AddPost(postRequest);

			return Ok(result);
		}

		/// <summary>
		/// Deletes a post based on its unique identifier.
		/// </summary>
		/// <param name="id">The unique identifier of the post to be deleted.</param>
		/// <returns>
		/// An asynchronous task representing the HTTP response.
		/// Return true if delete successfully, otherwise return false.
		/// </returns>
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeletePost (Guid id)
		{
			var isDeleted = await _postService.DeletePost(id);
			return Ok(isDeleted);
		}


	}
}

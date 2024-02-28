using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IService;

namespace vietqtran.Api.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class FollowController : ControllerBase
	{
		private readonly IFollowService _followService;

		public FollowController (IFollowService followService)
		{
			_followService = followService;
		}

		[HttpGet]
		[ProducesResponseType(StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status400BadRequest)]
		public async Task<IActionResult> GetFollowers ( )
		{
			var result = await _followService.GetFollows();
			if (result != null)
			{
				return Ok(result);
			}
			return BadRequest();
		}

		[HttpPost("startFollow")]
		[ProducesResponseType(StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status400BadRequest)]
		public async Task<IActionResult> FollowUser (Guid sourceUserId, Guid destinationUserId)
		{
			var result = await _followService.FollowUserAsync(sourceUserId, destinationUserId);
			if (result)
			{
				return Ok(result);
			}
			return BadRequest();
		}

		[HttpDelete("unfollow")]
		[ProducesResponseType(StatusCodes.Status200OK)]
		[ProducesResponseType(StatusCodes.Status400BadRequest)]
		public async Task<IActionResult> UnfollowUser (Guid sourceUserId, Guid destinationUserId)
		{
			var result = await _followService.UnFollowUserAsync(sourceUserId, destinationUserId);
			if (result)
			{
				return Ok(result);
			}
			return BadRequest();
		}
	}
}

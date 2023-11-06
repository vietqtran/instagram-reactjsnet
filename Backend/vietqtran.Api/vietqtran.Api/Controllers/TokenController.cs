using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.ViewModels;

namespace vietqtran.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TokenController : ControllerBase
	{
		private readonly ITokenService _tokenService;

		public TokenController (ITokenService tokenService)
		{
			_tokenService = tokenService;
		}

		[HttpPost("refreshToken")]
		public async Task<IActionResult> Refresh (string refreshToken)
		{
			var response = await _tokenService.RefreshToken(refreshToken);

			return Ok(response);
		}
	}
}

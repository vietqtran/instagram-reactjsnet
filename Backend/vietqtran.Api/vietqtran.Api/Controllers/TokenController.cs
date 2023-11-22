using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
		public async Task<IActionResult> RefreshToken (string refreshToken)
		{
			string token = await _tokenService.RefreshToken(refreshToken);
			return Ok(token);
		}


	}
}

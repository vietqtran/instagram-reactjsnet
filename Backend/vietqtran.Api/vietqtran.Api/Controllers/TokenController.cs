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

		/// <summary>
		/// Refreshes an authentication token using a provided refresh token.
		/// </summary>
		/// <param name="refreshToken">The refresh token used to generate a new authentication token.</param>
		/// <returns>
		/// An asynchronous task representing the HTTP response.
		/// Returns an HTTP 200 (OK) status with the newly generated authentication token if the refresh is successful.
		/// </returns>
		[HttpPost("refreshToken")]
		public async Task<IActionResult> RefreshToken (string refreshToken)
		{
			string token = await _tokenService.RefreshToken(refreshToken);
			return Ok(token);
		}


	}
}

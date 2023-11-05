using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.RequestModels.User;
using vietqtran.Models.ViewModels;
using vietqtran.Services.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace vietqtran.Api.Controllers
{
	[Route("v1/api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly IAppUserService _appUserService;
		private readonly IMapper _mapper;
		private readonly ILogger<UserController> _logger;

		public UserController (IAppUserService appUserService, IMapper mapper, ILogger<UserController> logger)
		{
			_appUserService = appUserService;
			_mapper = mapper;
			_logger = logger;
		}






		[HttpGet]
		[ProducesResponseType(200, Type = typeof(ICollection<AppUserVM>))]
		public async Task<IActionResult> GetAsync ( )
		{
			var users = await _appUserService.GetAllUsersServiceAsync();
			return Ok(_mapper.Map<ICollection<AppUserVM>>(users));
		}






		[HttpPost("login")]
		public async Task<IActionResult> Login ([FromBody] LoginCredentials loginCredentials)
		{
			_logger.LogInformation("Attempting to login for user: {userEmail}", loginCredentials.Email);
			var tokenResult = await _appUserService.GetLoginToken(loginCredentials);

			if (string.IsNullOrEmpty(tokenResult)) {
				_logger.LogError("An error occurred while trying to login for user: {userEmail}", loginCredentials.Email);
				return BadRequest("Can't Login!");
			}
			_logger.LogInformation("Login successful for user: {userEmail}", loginCredentials.Email);
			return Ok(new { token = tokenResult });
		}





		[HttpPost("signup")]
		public async Task<IActionResult> SignUp ([FromBody] SignUpCredentials signUpCredentials)
		{
			return Ok(await _appUserService.SignUp(signUpCredentials));
		}
	}
}

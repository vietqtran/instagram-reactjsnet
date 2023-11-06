using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using NuGet.Common;
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

		[HttpPost("register")]
		public async Task<IActionResult> Register (SignUpCredentials signUpCredentials)
		{
			var result = await _appUserService.Register(signUpCredentials);

			return Ok(result);
		}

		[HttpPost("login")]
		public async Task<IActionResult> Login (LoginCredentials loginCredentials)
		{
			var result = await _appUserService.Login(loginCredentials);

			return Ok(result);
		}
	}
}

using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using NuGet.Common;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Core.Utilities;
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
		private readonly IOptions<JwtConfig> _jwtConfig;


		public UserController (IAppUserService appUserService, IMapper mapper, ILogger<UserController> logger, IOptions<JwtConfig> jwtConfig)
		{
			_appUserService = appUserService;
			_mapper = mapper;
			_logger = logger;
			_jwtConfig = jwtConfig;
		}

		[HttpGet]
		//[Authorize]
		[ProducesResponseType(200, Type = typeof(ICollection<AppUserVM>))]
		public async Task<IActionResult> GetAsync ( )
		{
			var users = await _appUserService.GetAllUsersServiceAsync();
			return Ok(_mapper.Map<ICollection<AppUserVM>>(users));
		}

		[HttpPost("register")]
		[AllowAnonymous]
		public async Task<IActionResult> Register (SignUpCredentials signUpCredentials)
		{
			var result = await _appUserService.Register(signUpCredentials);

			if (result.Status == "Successed") {
				return Ok(result);
			}

			return BadRequest(result);
		}

		[HttpPost("login")]
		[AllowAnonymous]
		public async Task<IActionResult> Login (LoginCredentials loginCredentials)
		{
			var result = await _appUserService.Login(loginCredentials);

			if (result.Status != "Successed") {
				return BadRequest(result);
			}

			//var handler = new JwtSecurityTokenHandler();
			//var jwtToken = handler.ReadJwtToken(result.AccessToken);
			//var claims = jwtToken.Claims.ToList();
			//var roles = claims.Where(x => x.Type == "role").Select(x => x.Value).ToList();

			return Ok(result);
		}
	}
}

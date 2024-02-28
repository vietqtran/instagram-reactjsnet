// Ignore Spelling: username

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
	[Route("api/v1/[controller]")]
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

		/// <summary>
		/// Retrieves a collection of all users.
		/// </summary>
		/// <returns>
		/// An asynchronous task representing the HTTP response.
		/// Returns an HTTP 200 (OK) status with a collection of <see cref="AppUserVM"/> if the operation is successful.
		/// </returns>
		[HttpGet]
		[ProducesResponseType(200, Type = typeof(ICollection<AppUserVM>))]
		public async Task<IActionResult> GetUsersAsync ( )
		{
			var users = await _appUserService.GetAllUsersServiceAsync();
			return Ok(_mapper.Map<ICollection<AppUserVM>>(users));
		}

		[HttpGet("{username}")]
		public async Task<IActionResult> GetUserByIdAsync (string username)
		{
			var user = await _appUserService.GetUserByUsernameServiceAsync(username);
			return Ok(user);
		}

		/// <summary>
		/// Registers a new user.
		/// </summary>
		/// <param name="signUpCredentials">The credentials for user registration.</param>
		/// <returns>
		/// An asynchronous task representing the HTTP response.
		/// Returns an HTTP 200 (OK) status with the registration result if successful.
		/// Returns an HTTP 400 (Bad Request) status if registration fails.
		/// </returns>
		[HttpPost("register")]
		[AllowAnonymous]
		public async Task<IActionResult> Register (SignUpCredentials signUpCredentials)
		{
			var result = await _appUserService.Register(signUpCredentials);

			if (result.Status == "Succeed")
			{
				return Ok(result);
			}

			return BadRequest(result);
		}

		/// <summary>
		/// Authenticates a user and generates an access token.
		/// </summary>
		/// <param name="loginCredentials">The credentials for user login.</param>
		/// <returns>
		/// An asynchronous task representing the HTTP response.
		/// Returns an HTTP 200 (OK) status with the login result and sets an authentication cookie.
		/// Returns an HTTP 404 (Not Found) status if login fails.
		/// </returns>
		[HttpPost("login")]
		[AllowAnonymous]
		public async Task<IActionResult> Login (LoginCredentials loginCredentials)
		{
			var result = await _appUserService.Login(loginCredentials);

			if (result.Status != "Succeed")
			{
				return Ok(StatusCodes.Status404NotFound);
			}

			//HttpContext.Response.Cookies.Append("token", result.AccessToken, new CookieOptions()
			//{
			//	HttpOnly = true,
			//	SameSite = SameSiteMode.Strict,
			//	Secure = true
			//});

			//var token = Request.Cookies["token"];

			//var handler = new JwtSecurityTokenHandler();
			//var jwtToken = handler.ReadJwtToken(result.AccessToken);
			//var claims = jwtToken.Claims.ToList();
			//var roles = claims.Where(x => x.Type == "role").Select(x => x.Value).ToList();

			return Ok(result);
		}

		[HttpGet("suggest")]
		public async Task<IActionResult> GetSuggestUsers ([FromQuery] Guid userId)
		{
			var result = await _appUserService.GetSuggestUsers(userId);
			return Ok(result);
		}
	}
}

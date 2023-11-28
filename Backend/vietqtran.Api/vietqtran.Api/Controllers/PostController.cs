using Microsoft.AspNetCore.Mvc;
using vietqtran.Models.Entities;
using vietqtran.Models.RequestModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace vietqtran.Api.Controllers
{
	[Route("api/v1/[controller]")]
	[ApiController]
	public class PostController : ControllerBase
	{
		// GET: api/<PostController>
		[HttpGet]
		public async Task<IActionResult> GetAllPost ( )
		{
			return Ok(200);
		}

		// GET api/<PostController>/5
		[HttpGet("{id}")]
		public async Task<IActionResult> GetPost (int id)
		{
			return Ok();
		}

		// POST api/<PostController>
		[HttpPost]
		public async Task<IActionResult> AddPost (PostRequest postRequest)
		{
			return Ok(postRequest);
		}
	}
}

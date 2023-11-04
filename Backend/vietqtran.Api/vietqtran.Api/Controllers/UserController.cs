using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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

        public UserController (IAppUserService appUserService, IMapper mapper)
        {
            _appUserService = appUserService;
            _mapper = mapper;
        }

        // GET: api/<UserController>
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ICollection<AppUserVM>))]
        public async Task<IActionResult> GetAsync ( )
        {
            var users = await _appUserService.GetAllUsersServiceAsync();
            return Ok(_mapper.Map<ICollection<AppUserVM>>(users));
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get (int id)
        {
            return "value";
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post ([FromBody] string value)
        {
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put (int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete (int id)
        {
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.DataAccess.Data;
using vietqtran.Models.DTO;
using Microsoft.EntityFrameworkCore;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Models.RequestModels.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using AutoMapper;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using vietqtran.Core.Utilities;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using vietqtran.Models.ViewModels;
using vietqtran.Models.Entities;
using System.Security.Cryptography;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Models.ResponseModels;

namespace vietqtran.DataLayer.Repositories
{
	public class AppUserRepository : IAppUserRepository
	{
		private readonly DataContext _context;
		private readonly IOptions<JwtConfig> _jwtConfig;
		private readonly IMapper _mapper;
		private readonly ILogger<AppUserRepository> _logger;

		public AppUserRepository (DataContext context,
		    IOptions<JwtConfig> jwtConfig,
		    IMapper mapper,
		    ILogger<AppUserRepository> logger)
		{
			_mapper = mapper;
			_context = context;
			_jwtConfig = jwtConfig;
			_logger = logger;
		}

		public async Task<ICollection<User>> GetAllUsersAsync ( )
		{
			return await _context.Users.ToListAsync();
		}
	}
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.DataAccess.Data;
using vietqtran.Models.DTO;
using vietqtran.Models.User;
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

namespace vietqtran.DataLayer.Repositories
{
    public class AppUserRepository : IAppUserRepository
    {
        private readonly DataContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IOptions<JwtConfig> _jwtConfig;
        private readonly IMapper _mapper;
        private readonly ILogger<AppUserRepository> _logger;

        public AppUserRepository (DataContext context, UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, IOptions<JwtConfig> jwtConfig, IMapper mapper, ILogger<AppUserRepository> logger)
        {
            _mapper = mapper;
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtConfig = jwtConfig;
            _logger = logger;
        }

        public async Task<ICollection<AppUser>> GetAllUsersAsync ( )
        {
            return await _context.AppUsers.ToListAsync();
        }

        public async Task<string> Login (LoginCredentials loginCredentials)
        {
            _logger.LogInformation("Repository: Login for user: {userEmail}", loginCredentials.Email);
            var user = await _userManager.FindByEmailAsync(loginCredentials.Email.ToLowerInvariant());
            if (user == null) {
                _logger.LogError("Repository: User null");
                return null;
            }

            var result = await _signInManager.PasswordSignInAsync(user, loginCredentials.Password, false, false);

            if (!result.Succeeded) {
                _logger.LogError("Repository: User null");
                return null;
            }

            var authClaims = new List<Claim> {
                new Claim(ClaimTypes.Email, loginCredentials.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            _logger.LogInformation(_jwtConfig.Value.SecretKey + " - " + _jwtConfig.Value.Issuer + " - " + _jwtConfig.Value.Audience);

            var authKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtConfig.Value.SecretKey));

            var token = new JwtSecurityToken(
                    issuer: _jwtConfig.Value.Issuer,
                    audience: _jwtConfig.Value.Audience,
                    expires: DateTime.Now.AddMonths(1),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authKey, SecurityAlgorithms.HmacSha256)
                );

            _logger.LogInformation("Repository: Token: " + token);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        public async Task<AppUserVM> SignUpAsync (SignUpCredentials signUpCredentials)
        {
            var user = _mapper.Map<AppUser>(signUpCredentials);
            var result = await _userManager.CreateAsync(user, signUpCredentials.Password);

            if (result.Succeeded) {
                await _userManager.UpdateAsync(user);
                return _mapper.Map<AppUserVM>(signUpCredentials);
            }
            return null;
        }
    }
}

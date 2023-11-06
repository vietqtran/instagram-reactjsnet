using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.User;
using vietqtran.Models.DTO;
using vietqtran.Models.RequestModels.User;
using Microsoft.AspNetCore.Identity;
using vietqtran.Models.ViewModels;
using vietqtran.Models.Models;
using vietqtran.Models.ResponseModels;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface IAppUserRepository
	{
		public Task<ICollection<AppUser>> GetAllUsersAsync ( );

		Task<AuthResponse> Register (SignUpCredentials signUpCredentials);

		Task<AuthResponse> Login (LoginCredentials loginCredentials);

	}
}

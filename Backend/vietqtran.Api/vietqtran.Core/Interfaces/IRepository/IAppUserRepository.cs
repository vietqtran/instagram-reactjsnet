// Ignore Spelling: vietqtran App

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.DTO;
using vietqtran.Models.RequestModels.User;
using Microsoft.AspNetCore.Identity;
using vietqtran.Models.ViewModels;
using vietqtran.Models.ResponseModels;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface IAppUserRepository
	{
		Task<ICollection<User>> GetAllUsersAsync ( );
		Task<User> GetUserByUsernameAsync (string username);
		Task<Role> GetRoleByUserId (Guid id);
		Task UpdateRefreshToken (RefreshToken refreshToken);
	}
}

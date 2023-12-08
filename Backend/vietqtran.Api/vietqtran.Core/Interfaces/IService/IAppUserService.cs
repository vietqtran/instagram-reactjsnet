﻿// Ignore Spelling: vietqtran App

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.ViewModels;
using vietqtran.Models.DTO;
using vietqtran.Models.RequestModels.User;
using Microsoft.AspNetCore.Identity;
using vietqtran.Models.Entities;
using vietqtran.Models.ResponseModels;

namespace vietqtran.Core.Interfaces.IService
{
	public interface IAppUserService
	{
		Task<ICollection<User>> GetAllUsersServiceAsync ( );
		Task<UserDetailVM?> GetUserByUsernameServiceAsync (string username);
		Task<SignUpResponse> Register (SignUpCredentials signUpCredentials);
		Task<LoginResponse> Login (LoginCredentials loginCredentials);
	}
}

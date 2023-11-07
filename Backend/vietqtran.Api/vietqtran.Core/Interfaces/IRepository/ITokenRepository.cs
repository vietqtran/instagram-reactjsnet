﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.ResponseModels;
using vietqtran.Models.Entities;

namespace vietqtran.Core.Interfaces.IRepository
{
	public interface ITokenRepository
	{
		Task<AuthResponse> RefreshToken (string refreshToken);
	}
}

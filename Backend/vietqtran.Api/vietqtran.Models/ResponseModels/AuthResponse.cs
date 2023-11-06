﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Models;
using vietqtran.Models.User;

namespace vietqtran.Models.ResponseModels
{
	public class AuthResponse
	{
		public string AccessToken { get; set; }
		public string RefreshToken { get; set; }
		public DateTime ExpireDate { get; set; }
	}
}

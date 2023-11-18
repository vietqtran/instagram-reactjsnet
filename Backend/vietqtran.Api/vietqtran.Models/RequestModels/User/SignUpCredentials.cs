﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.RequestModels.User
{
	public class SignUpCredentials
	{
		public string Email { get; set; }
		public string UserName { get; set; }
		public string Name { get; set; }
		public string Password { get; set; }
		public string Avatar { get; set; }
	}
}

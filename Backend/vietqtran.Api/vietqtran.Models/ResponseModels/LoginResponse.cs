﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;

namespace vietqtran.Models.ResponseModels
{
	public class LoginResponse
	{
		public string? Status { get; set; }
		public string? Token { get; set; }
		public string? Error { get; set; }
	}
}

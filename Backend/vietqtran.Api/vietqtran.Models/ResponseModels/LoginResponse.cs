using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.ViewModels;

namespace vietqtran.Models.ResponseModels
{
	public class LoginResponse
	{
		public string? Status { get; set; }
		public string? AccessToken { get; set; }
		public string? RefreshToken { get; set; }
		public string? Error { get; set; }
		public AppUserVM? User { get; set; }
	}
}

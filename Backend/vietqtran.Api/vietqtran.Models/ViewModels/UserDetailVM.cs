using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.ViewModels
{
	public class UserDetailVM
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string UserName { get; set; }
		public string? Avatar { get; set; }
		public string? Bio { get; set; }
		public long Followers { get; set; }
		public long Following { get; set; }
		public long Posts { get; set; }
	}
}

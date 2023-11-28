using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Enums;

namespace vietqtran.Models.RequestModels
{
	public class PostRequest
	{
		public string UserId { get; set; }
		public string title { get; set; }
		public Visibility visibility { get; set; }
	}
}

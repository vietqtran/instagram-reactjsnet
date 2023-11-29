using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities;
using vietqtran.Models.Enums;
using vietqtran.Models.ViewModels;

namespace vietqtran.Models.ResponseModels
{
	public class PostResponse
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		public string Title { get; set; }
		public DateTime CreatedAt { get; set; }
		public Visibility Visibility { get; set; }
		public bool IsPinned { get; set; }
		public ICollection<string> PostImages { get; set; }
		public AppUserVM User { get; set; }
	}
}

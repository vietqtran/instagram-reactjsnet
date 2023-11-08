using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities
{
	public class Post
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		public string Title { get; set; }
		public DateTime CreatedAt { get; set; }
		public Visibility Visibility { get; set; }



		//! Reference
		public User User { get; set; }
		public ICollection<Message> Messages { get; set; }
	}
}

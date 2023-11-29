using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities
{
	public class HighLight
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		[Url]
		public string PreviewImage { get; set; }
		public DateTime CreatedAt { get; set; }
		public string Title { get; set; }



		//! Reference
		public User User { get; set; }
	}
}

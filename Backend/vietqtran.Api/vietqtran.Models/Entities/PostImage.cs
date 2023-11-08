using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities
{
	public class PostImage
	{
		public Guid Id { get; set; }
		public Guid PostId { get; set; }
		[Url]
		public string Link { get; set; }
	}
}

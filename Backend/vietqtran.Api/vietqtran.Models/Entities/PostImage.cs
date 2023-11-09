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
		public long Id { get; set; }
		public long PostId { get; set; }
		[Url]
		public string Link { get; set; }
	}
}

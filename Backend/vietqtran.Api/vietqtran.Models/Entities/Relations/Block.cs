using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class Block
	{
		public Guid Id { get; set; }
		public Guid Blocked { get; set; }
		public Guid Blocker { get; set; }
		public DateTime CreatedAt { get; set; }
	}
}

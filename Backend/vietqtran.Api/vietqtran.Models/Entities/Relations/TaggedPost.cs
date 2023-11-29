using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class TaggedPost
	{
		public Guid Id { get; set; }
		public Guid TaggedId { get; set; }
		public Guid PostId { get; set; }



		//! Reference

		public User Tagged { get; set; }
		public Post Post { get; set; }
	}
}

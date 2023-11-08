using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class Saved
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		public Guid PostId { get; set; }
		public Guid? CollectionId { get; set; }


		//! Reference 
		public Post Post { get; set; }
		public User User { get; set; }
	}
}
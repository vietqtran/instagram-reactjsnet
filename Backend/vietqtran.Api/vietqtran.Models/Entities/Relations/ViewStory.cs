using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities.Relations
{
	public class ViewStory
	{
		public Guid Id { get; set; }
		public Guid ViewerId { get; set; }
		public Guid StotyId { get; set; }
		public bool Liked { get; set; } = false;


		//! Reference

		public User User { get; set; }
		public Story Story { get; set; }
	}
}

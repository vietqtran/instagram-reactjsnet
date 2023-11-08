using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Models.Entities
{
	public class Story
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		[Url]
		public string MediaLink { get; set; }
		public string Type { get; set; }
		public DateTime CreatedAt { get; set; }
		public Guid HighLightId { get; set; }

		//! Reference
		public User User { get; set; }
		public ICollection<ViewStory> ViewsStory { get; set; }
	}
}

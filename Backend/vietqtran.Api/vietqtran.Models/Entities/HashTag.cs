using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;

namespace vietqtran.Models.Entities
{
	public class HashTag
	{
		public long Id { get; set; }
		public string Titile { get; set; }
		[Url]
		public string Image { get; set; }



		//! Reference

		public ICollection<PostHashTag> PostHashTags { get; set; }
		public ICollection<FollowHashTag> FollowHashTags { get; set; }
		public ICollection<SearchHistory> SearchHistories { get; set; }

	}
}

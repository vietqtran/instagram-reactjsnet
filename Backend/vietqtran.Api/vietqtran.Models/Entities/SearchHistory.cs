using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities
{
	public class SearchHistory
	{
		public Guid Id { get; set; }
		public SearchType Type { get; set; }
		public Guid UserId { get; set; }
		public Guid? HashTagId { get; set; }
		public Guid? SearchUserId { get; set; }


		//! Reference

		public User User { get; set; }
		public User SearchUser { get; set; }
		public HashTag SearchHashTag { get; set; }
	}
}

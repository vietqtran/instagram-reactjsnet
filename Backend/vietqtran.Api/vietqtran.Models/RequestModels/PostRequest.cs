﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Enums;

namespace vietqtran.Models.RequestModels
{
	public class PostRequest
	{
		public Guid UserId { get; set; }
		public string Title { get; set; }
		public Visibility Visibility { get; set; }
		public ICollection<string> PostImages { get; set; }
	}
}

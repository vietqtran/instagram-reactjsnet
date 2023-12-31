﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities
{
	public class Post
	{
		public Guid Id { get; set; }
		public Guid UserId { get; set; }
		public string Title { get; set; }
		public DateTime CreatedAt { get; set; }
		public Visibility Visibility { get; set; } = Visibility.Public;
		public bool IsPinned { get; set; } = false;


		//! Reference

		public User User { get; set; }
		public ICollection<LikePost> LikePosts { get; set; }
		public ICollection<Comment> Comments { get; set; }
		public ICollection<Saved> Saveds { get; set; }
		public ICollection<PostHashTag> PostHashTags { get; set; }
		public ICollection<TaggedPost> Tags { get; set; }
		public ICollection<PostImage> PostImages { get; set; }
	}
}

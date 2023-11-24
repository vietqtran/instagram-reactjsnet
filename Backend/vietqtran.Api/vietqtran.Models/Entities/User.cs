using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Entities.Relations;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities
{
	public class User : IdentityUser<Guid>
	{
		public string Name { get; set; }
		public override string UserName { get; set; }
		public string Password { get; set; }
		public DateTime BirthDay { get; set; }
		public DateTime CreatedAt { get; set; }
		public bool IsActive { get; set; } = false;
		public DateTime LastOnlineTime { get; set; }
		public DateTime LastOfflineTime { get; set; }
		public bool Gender { get; set; }
		public string Bio { get; set; }
		[Url]
		public string Avatar { get; set; }
		public bool IsLocked { get; set; } = false;


		//! Reference 

		public RefreshToken RefreshToken { get; set; }
		public ICollection<Message> Messages { get; set; }
		public ICollection<ReactMessage> MessageReacts { get; set; }
		public ICollection<PersonalLink> PersonalLinks { get; set; }
		public ICollection<Story> Stories { get; set; }
		public ICollection<HighLight> HighLights { get; set; }
		public ICollection<Follow> Followers { get; set; }
		public ICollection<Follow> Followeds { get; set; }
		public ICollection<Block> Blockers { get; set; }
		public ICollection<Block> Blockeds { get; set; }
		public ICollection<BestFriend> RequestUsers { get; set; }
		public ICollection<BestFriend> ResponseUsers { get; set; }
		public ICollection<Post> Posts { get; set; }
		public ICollection<ViewStory> ViewsStory { get; set; }
		public ICollection<LikePost> LikePosts { get; set; }
		public ICollection<Comment> Comments { get; set; }
		public ICollection<Notification> SendNotifications { get; set; }
		public ICollection<Notification> ReceiveNotifications { get; set; }
		public ICollection<Saved> Saveds { get; set; }
		public ICollection<SavedGroup> SavedGroups { get; set; }
		public ICollection<FollowHashTag> FollowHashTags { get; set; }
		public SearchHistory SearchHistory { get; set; }
		public ICollection<SearchHistory> SearchHistories { get; set; }
		public ICollection<UserConversation> UserConversations { get; set; }
		public ICollection<TaggedPost> Tags { get; set; }
		public ICollection<LikeComment> LikeComments { get; set; }
	}
}

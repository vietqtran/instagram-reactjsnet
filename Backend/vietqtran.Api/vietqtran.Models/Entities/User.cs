using Microsoft.AspNetCore.Identity;
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
		public Guid RoleId { get; set; }
		public bool IsPrivateAccount { get; set; } = false;
		public DateTime CreatedAt { get; set; }
		public bool IsActive { get; set; } = false;
		public DateTime LastOnlineTime { get; set; }
		public DateTime LastOfflineTime { get; set; }
		public bool Gender { get; set; }
		public string Bio { get; set; }

		[Url]
		public string Avatar { get; set; }



		//! Reference 

		public Role UserRole { get; set; }
		public AccessToken AccessToken { get; set; }
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
		public ICollection<Post> Posts { get; set; }
		public ICollection<ViewStory> ViewsStory { get; set; }
	}
}

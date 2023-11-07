using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.Entities
{
	public class Role : IdentityRole<Guid>
	{
		public override Guid Id { get; set; }
		public string? Description { get; set; }


		//! Reference 

		public ICollection<User> Users { get; set; }
	}
}

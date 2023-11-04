using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace vietqtran.Models.User
{
    public class AppUser : IdentityUser<Guid>
    {
        public string? Name { get; set; }
        public string? Password { get; set; }
        public DateTime Dob { get; set; }
    }
}

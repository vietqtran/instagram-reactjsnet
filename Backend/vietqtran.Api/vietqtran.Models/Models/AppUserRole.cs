using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.User
{
    public class AppUserRole : IdentityRole<Guid>
    {
        public string? Description { get; set; }
    }
}

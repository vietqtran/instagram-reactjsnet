using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vietqtran.Models.ViewModels
{
    public class AppUserVM
    {
        public Guid ID { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public DateTime Dob { get; set; }
    }
}

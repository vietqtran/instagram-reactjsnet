using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using vietqtran.Models.Enums;

namespace vietqtran.Models.Entities.Relations
{
    public class ReactMessage
    {
        public Guid Id { get; set; }
        public MessageReact React { get; set; }
        public string Name { get; set; }
        public Guid UserId { get; set; }
        public Guid MessageId { get; set; }


        //! Reference
        public Message Message { get; set; }
        public User User { get; set; }
    }
}

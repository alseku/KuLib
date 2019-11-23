using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.PublicationInstances
{
    public class PublicationInstanceEditDto
    {
        public long Id { get; set; }

        public long PublicationId { get; set; }

        public string PublicationInfoStr { get; set; }

        public long? UserId { get; set; }

        public string UserShortName { get; set; }

        public DateTime? ReturnDate { get; set; }
    }
}
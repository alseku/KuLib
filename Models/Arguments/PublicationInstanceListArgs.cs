using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Models.Arguments
{
    public class PublicationInstanceListArgs : BaseListArgs
    {
        public long? PublicationId { get; set; }

        public long? UserId { get; set; }
    }
}
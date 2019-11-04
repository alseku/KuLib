using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Models.Arguments
{
    public class BaseListArgs
    {
        public int Page { get; set; }

        public int Start { get; set; }

        public int Limit { get; set; }
    }
}
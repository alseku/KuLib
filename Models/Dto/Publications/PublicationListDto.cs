using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Publications
{
    public class PublicationListDto
    {
        public long Id { get; set; }

        public string InfoStr { get; set; }

        public int Year { get; set; }

        public int PublicationInstancesCount { get; set; }

        public int FreePublicationInstancesCount { get; set; }
    }
}
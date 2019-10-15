using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KuLib.Models.Entities.Creators;

namespace KuLib.Models.Entities.Publications
{
    [Table("JournalIssues")]
    public class JournalIssue: Publication
    {
        [MaxLength(100)]
        public string JournalTitle { get; set; }

        public int Volume { get; set; }

        public int No { get; set; }

        public List<Creator> Editors { get; set; }
    }
}
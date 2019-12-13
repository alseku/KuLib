using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KuLib.Models.Entities.Publications
{
    [Table("JournalIssues")]
    public class JournalIssue: Publication
    {
        /// <summary>
        /// Наименование журнала
        /// </summary>
        [MaxLength(400)]
        [Required]
        public string JournalTitle { get; set; }

        /// <summary>
        /// Номер тома
        /// </summary>
        [Required]
        public int Volume { get; set; }

        /// <summary>
        /// Номер выпуска
        /// </summary>
        [Required]
        public int No { get; set; }
    }
}
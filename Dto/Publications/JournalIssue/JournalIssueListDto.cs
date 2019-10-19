using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Publications.JournalIssue
{
    public class JournalIssueListDto : PublicationListDto
    {
        /// <summary>
        /// Наименование журнала
        /// </summary>
        public string JournalTitle { get; set; }

        /// <summary>
        /// Номер тома
        /// </summary>
        public int Volume { get; set; }

        /// <summary>
        /// Номер выпуска
        /// </summary>
        public int No { get; set; }
    }
}
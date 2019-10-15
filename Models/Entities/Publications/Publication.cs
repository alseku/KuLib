using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace KuLib.Models.Entities.Publications
{
    public class Publication
    {
        public int PublicationId { get; set; }

        [MaxLength(200)]
        public string InfoStr { get; set; }

        /// <summary>
        /// Год публикации
        /// </summary>
        public int Year { get; set; }

    }
}
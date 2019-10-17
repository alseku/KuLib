using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KuLib.Models.Entities.Publications
{
    [Table("Books")]
    public class Book: Publication
    {
        /// <summary>
        /// Наименование книги
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string BookTitle { get; set; }

        /// <summary>
        /// Автор(ы)
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string Author { get; set; }

    }
}
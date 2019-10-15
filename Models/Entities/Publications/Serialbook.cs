using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KuLib.Models.Entities.Creators;

namespace KuLib.Models.Entities.Publications
{
    [Table("Serialbooks")]
    public class SerialBook : Publication
    {
        /// <summary>
        /// Название книги (внутри серии книг)
        /// </summary>
        [MaxLength(4000)]
        public string BookTitle { get; set; }

        /// <summary>
        /// Название серии книг
        /// </summary>
        [MaxLength(4000)]
        public string SerialTitle { get; set; }

        /// <summary>
        /// Например: Том 5, Часть 3, Книга третья и т.п.
        /// </summary>
        public string Part { get; set; }

        public List<Creator> Authors { get; set; }
    }
}
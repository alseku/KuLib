using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KuLib.Models.Entities.Publications
{
    [Table("Serialbooks")]
    public class SerialBook : Publication
    {
        /// <summary>
        /// Наименование книги (внутри серии книг)
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string BookTitle { get; set; }

        /// <summary>
        /// Название серии книг
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string SerialTitle { get; set; }

        /// <summary>
        /// Например: Том 5, Часть 3, Книга третья и т.п.
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string Part { get; set; }

        /// <summary>
        /// Автор(ы) книги
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string Author { get; set; }







     
    }
}
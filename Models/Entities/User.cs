using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KuLib.Models.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Имя
        /// </summary>
        [MaxLength(4000)]
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        [MaxLength(4000)]
        [Required]
        public string Patronymic { get; set; }

        /// <summary>
        /// Фамилия
        /// </summary>
        [MaxLength(4000)]
        [Required]
        public string Surname { get; set; }


        /// <summary>
        /// "Имя Отчество Фамилия"
        /// </summary>
        [MaxLength(4000)]
        [Required]
        public string FullName { get; set; }

        /// <summary>
        /// "И.О. Фамилия"
        /// </summary>
        [MaxLength(4000)]
        [Required]
        public string ShortName { get; set; }

        /// <summary>
        /// Дата рождения
        /// </summary>
        [Required]
        public DateTime BirthDate { get; set; }
    }
}
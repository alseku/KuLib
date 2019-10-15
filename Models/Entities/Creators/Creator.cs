using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KuLib.Models.Entities.Publications;

namespace KuLib.Models.Entities.Creators
{
    //[Table("Creators")]
    public class Creator
    {
        public int CreatorId { get; set; }
        /// <summary>
        /// Имя
        /// </summary>
        [MaxLength(4000)]
        public string Name { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        [MaxLength(4000)]
        public string Patronymic { get; set; }

        /// <summary>
        /// Фамилия
        /// </summary>
        [MaxLength(4000)]
        public string Surname { get; set; }


        /// <summary>
        /// "Имя Отчество Фамилия"
        /// </summary>
        [MaxLength(4000)]
        public string FullName { get; set; }

        /// <summary>
        /// "И.О. Фамилия"
        /// </summary>
        [MaxLength(4000)]
        public string ShortName { get; set; }

        /// <summary>
        /// Дата рождения
        /// </summary>
        public DateTime  BirthDate { get; set; }

        public List<Publication> Publications { get; set; }

    }
}
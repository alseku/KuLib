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
        [MaxLength(200)]
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string Patronymic { get; set; }

        /// <summary>
        /// Фамилия
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string Surname { get; set; }


        /// <summary>
        /// "Фамилия Имя Отчество"
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string FullName { get; set; }

        /// <summary>
        /// "Фамилия И.О."
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string ShortName { get; set; }

        /// <summary>
        /// Дата рождения
        /// </summary>
        [Required]
        public DateTime BirthDate { get; set; }

        /// <summary>
        /// Коллекция выданных читателю книг
        /// </summary>
        public virtual ICollection<PublicationInstance> RentedPublications { get; set; }


    }
}
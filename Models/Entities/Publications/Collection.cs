using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KuLib.Models.Entities.Publications
{
    [Table("Collections")]
    public class Collection : Publication
    {
        /// <summary>
        /// Название сборника
        /// </summary>
        [MaxLength(400)]
        [Required]
        public string CollectionTitle { get; set; }

        /// <summary>
        /// Редактор(ы) сборника
        /// </summary>
        [MaxLength(200)]
        [Required]
        public string Editor { get; set; }

    }
}
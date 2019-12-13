using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace KuLib.Models.Entities.Publications
{
    public class Publication
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(400)]
        [Required]
        public string InfoStr { get; set; }

        /// <summary>
        /// Год публикации
        /// </summary>
        public int Year { get; set; }

        /// <summary>
        /// Экземпляры публикации
        /// </summary>
        public virtual ICollection<PublicationInstance> PublicationInstances { get; set; }

    }
}
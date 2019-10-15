using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KuLib.Models.Entities.Creators;

namespace KuLib.Models.Entities.Publications
{
    [Table("Collections")]
    public class Collection: Publication
    {
        /// <summary>
        /// Название сборника
        /// </summary>
        [MaxLength(4000)]
        public string CollectionTitle { get; set; }

        /// <summary>
        /// Редакторы сборника
        /// </summary>
        //public List<Editor> Editors { get; set; }
        public List<Creator> Editors { get; set; }

    }
}
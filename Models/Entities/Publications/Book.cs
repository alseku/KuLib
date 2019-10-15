using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using KuLib.Models.Entities.Persons;

namespace KuLib.Models.Entities.Publications
{
    [Table("Books")]
    public class Book: Publication
    {
        public Book()
        {
            this.Authors = new HashSet<Author>();
        }

        [MaxLength(4000)]
        public string BookTitle { get; set; }

        //public List<Author> Authors { get; set; }
        public ICollection<Author> Authors { get; set; }

    }
}
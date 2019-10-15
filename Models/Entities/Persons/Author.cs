using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using KuLib.Models.Entities.Publications;
using System.ComponentModel.DataAnnotations.Schema;

namespace KuLib.Models.Entities.Persons
{
    [Table("Authors")]
    public class Author: Person
    {
        public Author()
        {
            this.Books = new HashSet<Book>();
        }

        /// <summary>
        /// Книги, написанные данным автором
        /// </summary>
        public ICollection<Book> Books { get; set; }
    }
}
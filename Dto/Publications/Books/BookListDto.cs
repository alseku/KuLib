using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Publications.Books
{
    public class BookListDto : PublicationListDto
    {
        /// <summary>
        /// Титул
        /// </summary>
        public string BookTitle { get; set; }

        /// <summary>
        /// Автор
        /// </summary>
        public string Author { get; set; }
    }
}
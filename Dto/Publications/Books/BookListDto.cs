using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Publications.Books
{
    public class BookListDto : PublicationListDto
    {
        public string Title { get; set; }
    }
}
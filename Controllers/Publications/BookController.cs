using KuLib.Dto.Publications.Books;
using KuLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using KuLib.Services.Publications;

namespace KuLib.Controllers.Publications
{
    public class BookController: BasePublicationController<Book, BookEditDto>
    {
        public JsonResult List()
        {
            using (var dbc = new KuLibDbContext())
            {
                var data = dbc.Books.Select(x => new BookListDto
                {
                    Id = x.Id,
                    InfoStr = x.InfoStr,
                    BookTitle = x.BookTitle,
                    Author = x.Author
                }).ToArray();

                return Json(new
                {
                    success = true,
                    data = data
                }, JsonRequestBehavior.AllowGet);
            }
        }

        protected override BasePublicationService<Book, BookEditDto> GetService()
        {
            return new BookService();
        }
    }
}
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
using KuLib.Models.Arguments;
using KuLib.Extensions;

namespace KuLib.Controllers.Publications
{
    public class BookController: BasePublicationController<Book, BookEditDto>
    {
        public JsonResult List([Bind()]PublicationListArgs args)
        {
            using (var dbc = new KuLibDbContext())
            {
                var filteredQuery = dbc.Books
                    .Where(x => string.IsNullOrEmpty(args.InfoStrFilter) || x.InfoStr.Contains(args.InfoStrFilter));
                var data = filteredQuery
                    .OrderBy(x => x.InfoStr)
                    .Page(args)
                    .Select(x => new BookListDto
                    {
                        Id = x.Id,
                        InfoStr = x.InfoStr,
                        BookTitle = x.BookTitle,
                        Author = x.Author,
                        PublicationInstancesCount = x.PublicationInstances.Count(),
                        FreePublicationInstancesCount = x.PublicationInstances.Where(y => y.RentingUser == null).Count()

                    }).ToArray();

                return Json(new
                {
                    success = true,
                    data = data,
                    total = filteredQuery.Count()
                }, JsonRequestBehavior.AllowGet);
            }
        }

        protected override BasePublicationService<Book, BookEditDto> GetService()
        {
            return new BookService();
        }
    }
}
using KuLib.Dto.Publications.Books;
using KuLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;

namespace KuLib.Controllers.Publications
{
    public class BookController: Controller
    {
        public JsonResult List()
        {
            using (var dbc = new KuLibDbContext())
            {
                var data = dbc.Books.Select(x => new BookListDto
                {
                    Id = x.Id,
                    InfoStr = x.InfoStr,
                    Title = x.BookTitle
                }).ToArray();

                return Json(new
                {
                    success = true,
                    data = data
                }, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult Create(BookEditDto model)
        {
            try
            {
                using (var dbc = new KuLibDbContext())
                {
                    var newBook = new Book();
                    newBook.InfoStr = model.InfoStr;

                    dbc.Books.Add(newBook);
                    dbc.SaveChanges();

                    return Json(new
                    {
                        success = true,
                        message = "Создание прошло успешно",
                        id = newBook.Id
                    });
                }
            }
            catch (Exception ex)
            {
                return Json(new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }
    }
}
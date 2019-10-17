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

        public JsonResult Create(BookEditDto model)
        {
            try
            {
                var bookService = new BookService();
                var newBook = bookService.Create(model);
                return Json(new
                {
                    success = true,
                    message = "Создание прошло успешно",
                    id = newBook.Id
                });
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

        public JsonResult Update(BookEditDto model)
        {
            try
            {
                var bookService = new BookService();
                bookService.Update(model);
                return Json(new
                {
                    success = true,
                    message = "Редактирование прошло успешно"
                });
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

        public JsonResult Get(long id)
        {
            try
            {
                var bookService = new BookService();
                var data = bookService.Get(id);

                return Json(new
                {
                    success = true,
                    data = data
                });
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

        public JsonResult Delete(long id)
        {
            try
            {
                var bookService = new BookService();
                bookService.Delete(id);

                return Json(new
                {
                    success = true
                });
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
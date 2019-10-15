using KuLib.Dto;
using KuLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KuLib.Models.Entities;

namespace KuLib.Controllers.Publications
{
    public class BookController: Controller
    {
        public JsonResult List()
        {
            using (var dbc = new KuLibDbContext())
            {
                //dbc.SaveChanges();
                dbc.Database.Initialize(false);
            }


            return Json(new
            {
                success = true,
                data = new BookListDto[]
                {
                    new BookListDto { Id = 1, Name = "Имя книги 1", Title = "Наименование книги 1" },
                    new BookListDto { Id = 2, Name = "Имя книги 2", Title = "Наименование книги 2" }
                }
            },
            JsonRequestBehavior.AllowGet);
        }
    }
}
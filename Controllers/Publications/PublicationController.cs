using KuLib.Dto.Publications;
using KuLib.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KuLib.Controllers.Publications
{
    public class PublicationController : Controller
    {
        public JsonResult List()
        {
            using (var dbc = new KuLibDbContext())
            {
                var data = dbc.Publications.Select(x => new PublicationListDto
                {
                    Id = x.Id,
                    InfoStr = x.InfoStr
                }).ToArray();

                return Json(new
                {
                    success = true,
                    data = data,
                }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
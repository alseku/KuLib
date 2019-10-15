using KuLib.Dto.Publications;
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
            return Json(new 
            {
                success = true,
                data = new PublicationListDto[] 
                {
                    new PublicationListDto { Id = 1, InfoStr = "Первая" },
                    new PublicationListDto { Id = 2, InfoStr = "Вторая" }
                },
            }, JsonRequestBehavior.AllowGet);
        }
    }
}
using KuLib.Dto.Publications;
using KuLib.Extensions;
using KuLib.Models.Arguments;
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
        public JsonResult List([Bind()]PublicationListArgs args)
        {
            using (var dbc = new KuLibDbContext())
            {
                var filteredQuery = dbc.Publications
                    .Where(x => string.IsNullOrEmpty(args.InfoStrFilter) || x.InfoStr.Contains(args.InfoStrFilter));
                
                var data = filteredQuery
                    .OrderBy(x => x.InfoStr)
                    .Page(args)
                    .Select(x => new PublicationListDto
                    {
                        Id = x.Id,
                        InfoStr = x.InfoStr
                    }).ToArray();

                return Json(new
                {
                    success = true,
                    data = data,
                    total = filteredQuery.Count()
                }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
using KuLib.Dto.Publications;
using KuLib.Extensions;
using KuLib.Interfaces;
using KuLib.Models.Arguments;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using KuLib.Services.Publications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KuLib.Controllers.Publications
{
    public class PublicationController : Controller
    {
        public JsonResult List(PublicationListArgs args)
        {
            using (var dbc = new KuLibDbContext())
            {
                //var filteredQuery = dbc.Publications
                //    .Where(x => string.IsNullOrEmpty(args.InfoStrFilter) || x.InfoStr.Contains(args.InfoStrFilter));
                IQueryable<Publication> filteredQuery = dbc.Publications;
                if (!string.IsNullOrEmpty(args.InfoStrFilter))
                    filteredQuery = filteredQuery.Where(x => x.InfoStr.Contains(args.InfoStrFilter));

                var data = filteredQuery
                    .OrderBy(x => x.InfoStr)
                    .Page(args)
                    .Select(x => new PublicationListDto
                    {
                        Id = x.Id,
                        InfoStr = x.InfoStr,
                        Year = x.Year,
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

        public JsonResult Get(long id)
        {
            try
            {
                using (var dbc = new KuLibDbContext())
                {
                    var entity = dbc.Publications.Find(id);
                    var service = GetService(entity);
                    var data = service.Project(entity);

                    return Json(new
                    {
                        success = true,
                        data = data
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

        private IPublicationService GetService(Publication entity)
        {
            var serviceCreator = new PublicationServiceCreator();
            return serviceCreator.CreateService(entity);
        }

        public JsonResult Delete(long id)
        {
            try
            {
                using (var dbc = new KuLibDbContext())
                {
                    var entity = dbc.Publications.Find(id);
                    dbc.Publications.Remove(entity);

                    dbc.SaveChanges();

                    return Json(new
                    {
                        success = true
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
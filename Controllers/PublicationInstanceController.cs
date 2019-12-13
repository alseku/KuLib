using KuLib;
using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KuLib.Models.Entities;
using KuLib.Services.Publications;
using KuLib.Dto.Users;
using KuLib.Services.Users;
using KuLib.SystemOverrides;
using KuLib.Models.Arguments;
using KuLib.Extensions;
using KuLib.Services.PublicationInstances;
using KuLib.Dto.PublicationInstances;

namespace KuLib.Controllers
{
    public class PublicationInstanceController: Controller
    {
        public JsonNetResult List(PublicationInstanceListArgs args)
        {
            using (var dbc = new KuLibDbContext())
            {
                var filteredQuery = dbc.PublicationInstances
                    .Where(x => !args.PublicationId.HasValue || args.PublicationId.Value == x.Publication.Id)
                    .Where(x => !args.UserId.HasValue || args.UserId.Value == x.RentingUser.Id);
                var data = filteredQuery
                    .OrderBy(x => x.Id)
                    .Page(args)
                    .Select(x => new PublicationInstanceListDto
                    {
                        Id = x.Id,
                        PublicationId = x.Publication.Id,
                        PublicationInfoStr = x.Publication.InfoStr,
                        UserId = x.RentingUser.Id,
                        UserShortName = x.RentingUser.ShortName,
                        ReturnDate = x.ReturnDate
                    }).ToArray();

                return new JsonNetResult() { Data = new
                    {
                        data = data,
                        total = filteredQuery.Count(),
                        success = true,
                    }
                };
            }
        }

        public JsonResult ListFree(PublicationInstanceListArgs args)
        {
            using (var dbc = new KuLibDbContext())
            {
                var filteredQuery = dbc.PublicationInstances
                    .Where(x => x.Publication.Id == args.PublicationId && x.RentingUser == null);
                var data = filteredQuery
                    .OrderBy(x => x.Id)
                    .Page(args)
                    .Select(x => new { Id = x.Id })
                    .ToArray();

                return Json(new
                {
                    success = true,
                    data = data,
                    total = filteredQuery.Count(),
                }, JsonRequestBehavior.AllowGet);

            }
        }

        public JsonResult Create(PublicationInstanceEditDto model)
        {
            try
            {
                var instanceService = new PublicationInstanceService();
                var newUser = instanceService.Create(model);
                return Json(new
                {
                    success = true,
                    message = "Создание прошло успешно",
                    id = newUser.Id
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

        public JsonResult Update(PublicationInstanceEditDto model)
        {
            try
            {
                var instanceService = new PublicationInstanceService();
                instanceService.Update(model);
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

        public JsonNetResult Get(long id)
        {
            try
            {
                var instanceService = new PublicationInstanceService();
                var data = instanceService.Get(id);

                return new JsonNetResult() { Data = new { success = true, data = data } };
            }
            catch (Exception ex)
            {
                return new JsonNetResult() { Data = new { success = false, message = ex.Message }};
            }
        }

        public JsonResult Delete(long id)
        {
            try
            {
                var instanceService = new PublicationInstanceService();
                instanceService.Delete(id);

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
using KuLib.Dto.Publications;
using KuLib.Models.Entities.Publications;
using KuLib.Services.Publications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KuLib.Controllers.Publications
{
    public abstract class BasePublicationController<TEntity, TEditDto> : Controller
        where TEntity : Publication, new()
        where TEditDto : PublicationEditDto, new()
    {
        public JsonResult Create(TEditDto model)
        {
            try
            {
                var service = GetService();
                var newEntity = service.Create(model);
                return Json(new
                {
                    success = true,
                    message = "Создание прошло успешно",
                    id = newEntity.Id
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

        public JsonResult Update(TEditDto model)
        {
            try
            {
                var service = GetService();
                service.Update(model);
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
                var service = GetService();
                var data = service.Get(id);

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
                var service = GetService();
                service.Delete(id);

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

        protected abstract BasePublicationService<TEntity, TEditDto> GetService();
    }
}
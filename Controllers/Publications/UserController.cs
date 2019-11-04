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

namespace KuLib.Controllers.Users
{
    public class UserController: Controller
    {
        public JsonNetResult List([Bind()]BaseListArgs args)
        {
            using (var dbc = new KuLibDbContext())
            {
                var filteredQuery = dbc.Users;
                var data = filteredQuery
                    .OrderBy(x => x.FullName)
                    .Page(args)
                    .Select(x => new UserListDto
                    {
                        Id = x.Id,
                        FullName = x.FullName,
                        BirthDate = x.BirthDate
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

        public JsonResult Create(UserEditDto model)
        {
            try
            {
                var userService = new UserService();
                var newUser = userService.Create(model);
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

        public JsonResult Update(UserEditDto model)
        {
            try
            {
                var userService = new UserService();
                userService.Update(model);
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
                var userService = new UserService();
                var data = userService.Get(id);

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
                var userService = new UserService();
                userService.Delete(id);

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
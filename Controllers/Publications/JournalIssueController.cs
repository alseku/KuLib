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
using KuLib.Dto.Publications.JournalIssue;

namespace KuLib.Controllers.Publications
{
    public class JournalIssueController: BasePublicationController<JournalIssue, JournalIssueEditDto>
    {
        public JsonResult List()
        {
            using (var dbc = new KuLibDbContext())
            {
                var data = dbc.JournalIssues.Select(x => new JournalIssueListDto
                {
                    Id = x.Id,
                    InfoStr = x.InfoStr,
                    JournalTitle = x.JournalTitle,
                    Volume = x.Volume,
                    No = x.No
                }).ToArray();

                return Json(new
                {
                    success = true,
                    data = data
                }, JsonRequestBehavior.AllowGet);
            }
        }

        protected override BasePublicationService<JournalIssue, JournalIssueEditDto> GetService()
        {
            return new JournalIssueService();
        }
    }
}
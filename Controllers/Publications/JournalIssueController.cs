﻿using KuLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using KuLib.Services.Publications;
using KuLib.Dto.Publications.JournalIssue;
using KuLib.Models.Arguments;
using KuLib.Extensions;

namespace KuLib.Controllers.Publications
{
    public class JournalIssueController: BasePublicationController<JournalIssue, JournalIssueEditDto>
    {
        public JsonResult List(PublicationListArgs args)
        {
            using (var dbc = new KuLibDbContext())
            {
                //var filteredQuery = dbc.JournalIssues
                //    .Where(x => string.IsNullOrEmpty(args.InfoStrFilter) || x.InfoStr.Contains(args.InfoStrFilter));
                IQueryable<JournalIssue> filteredQuery = dbc.JournalIssues;
                if ( !string.IsNullOrEmpty(args.InfoStrFilter) )
                    filteredQuery = filteredQuery.Where(x => x.InfoStr.Contains(args.InfoStrFilter));

                var data = filteredQuery
                    .OrderBy(x => x.InfoStr)
                    .Page(args)
                    .Select(x => new JournalIssueListDto
                    {
                        Id = x.Id,
                        InfoStr = x.InfoStr,
                        Year = x.Year,
                        JournalTitle = x.JournalTitle,
                        Volume = x.Volume,
                        No = x.No,
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

        protected override BasePublicationService<JournalIssue, JournalIssueEditDto> GetService()
        {
            return new JournalIssueService();
        }
    }
}
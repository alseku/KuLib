using KuLib.Dto.Publications.Books;
using KuLib.Dto.Publications.JournalIssue;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace KuLib.Services.Publications
{
    /// <summary>
    /// Сервис для работы с книгами
    /// </summary>
    public class JournalIssueService : BasePublicationService<JournalIssue, JournalIssueEditDto>
    {
        /// <summary>
        /// Метод заполнения сущности на основе модели
        /// </summary>
        /// <param name="journalIssue"></param>
        /// <param name="model"></param>
        protected override void FillFromModel(JournalIssue journalIssue, JournalIssueEditDto model)
        {
            base.FillFromModel(journalIssue, model);
            journalIssue.JournalTitle = model.JournalTitle;
            journalIssue.Volume = model.Volume;
            journalIssue.No = model.No;
            journalIssue.InfoStr = $"{journalIssue.JournalTitle}, том {journalIssue.Volume}, выпуск {journalIssue.No}";

        }

        protected override void FillFromEntity(JournalIssueEditDto model, JournalIssue entity)
        {
            base.FillFromEntity(model, entity);
            model.JournalTitle = entity.JournalTitle;
            model.Volume = entity.Volume;
            model.No = entity.No;
            model.WindowXType = "journalissuewindow";
        }

        protected override DbSet<JournalIssue> GetSet(KuLibDbContext dbc)
        {
            return dbc.JournalIssues;
        }
    }
}
using KuLib.Interfaces;
using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Services.Publications
{
    public class PublicationServiceCreator
    {
        public IPublicationService CreateService(Publication entity)
        {
            if (entity is Book)
            {
                return new BookService();
            } 
            else if (entity is JournalIssue)
            {
                return new JournalIssueService();
            }
            else
            {
                throw new NotImplementedException();
            }
        }
    }
}
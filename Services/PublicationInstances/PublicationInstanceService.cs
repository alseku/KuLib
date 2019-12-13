using KuLib.Dto.PublicationInstances;
using KuLib.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Services.PublicationInstances
{
    public class PublicationInstanceService
    {
        public PublicationInstance Create(PublicationInstanceEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var newEntity = new PublicationInstance();
                newEntity.Publication = dbc.Publications.Find(model.PublicationId);
                dbc.PublicationInstances.Add(newEntity);
                dbc.SaveChanges();

                return newEntity;
            }
        }

        public void Update(PublicationInstanceEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var entity = dbc.PublicationInstances.Find(model.Id);

                if (model.UserId.HasValue && model.UserId.Value != 0)
                {
                    entity.RentingUser = dbc.Users.Find(model.UserId.Value);
                    if (model.ReturnDate.HasValue)
                    {
                        entity.ReturnDate = model.ReturnDate;
                    }
                    else
                    {
                        throw new Exception("При выдаче экземпляра читателю на руки необходимо заполнить дату возврата.");
                    }
                }
                else
                {
                    dbc.Entry(entity).Reference(x => x.RentingUser).Load();
                    entity.RentingUser = null;
                    entity.ReturnDate = null;
                }
                
                dbc.SaveChanges();
            }
        }

        public PublicationInstanceEditDto Get(long id)
        {
            using (var dbc = new KuLibDbContext())
            {
                var entity = dbc.PublicationInstances.Find(id);
                var model = new PublicationInstanceEditDto()
                {
                    Id = entity.Id,
                    PublicationId = entity.Publication.Id,
                    PublicationInfoStr = entity.Publication.InfoStr,
                    UserId = entity.RentingUser?.Id,
                    UserShortName = entity.RentingUser?.ShortName,
                    ReturnDate = entity.ReturnDate
                };

                return model;
            }
        }

        public void Delete(long id)
        {
            using(var dbc = new KuLibDbContext())
            {
                var entity = dbc.PublicationInstances.Find(id);
                dbc.PublicationInstances.Remove(entity);
                dbc.SaveChanges();
            }
        }
    }
}
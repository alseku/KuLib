﻿using KuLib.Dto.Publications;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace KuLib.Services.Publications
{
    public abstract class BasePublicationService<TEntity, TEditDto>
        where TEntity : Publication, new()
        where TEditDto: PublicationEditDto, new()
    {
        /// <summary>
        /// Метод создания новой книги
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public TEntity Create(TEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var newEntity = new TEntity();
                FillFromModel(newEntity, model);

                GetSet(dbc).Add(newEntity);
                dbc.SaveChanges();

                return newEntity;
            }
        }

        /// <summary>
        /// Метод редактирования книги
        /// </summary>
        /// <param name="model"></param>
        public void Update(TEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var entity = GetSet(dbc).Find(model.Id);
                FillFromModel(entity, model);

                dbc.SaveChanges();
            }
        }

        /// <summary>
        /// Метод получения ммодели книги
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public TEditDto Get(long id)
        {
            using (var dbc = new KuLibDbContext())
            {
                var entity = GetSet(dbc).Find(id);
                var model = new TEditDto();
                FillFromEntity(model, entity);

                return model;
            }
        }

        /// <summary>
        /// Метод удаления книги
        /// </summary>
        /// <param name="id"></param>
        public void Delete(long id)
        {
            using (var dbc = new KuLibDbContext())
            {
                var set = GetSet(dbc);
                var entity = set.Find(id);
                set.Remove(entity);

                dbc.SaveChanges();
            }
        }

        /// <summary>
        /// Метод заполнения сущности на основе модели
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="model"></param>
        protected virtual void FillFromModel(TEntity entity, TEditDto model)
        {
            entity.InfoStr = model.InfoStr;
        }

        /// <summary>
        /// Метод заполнения модели из сущности
        /// </summary>
        /// <param name="model"></param>
        /// <param name="entity"></param>
        protected virtual void FillFromEntity(TEditDto model, TEntity entity)
        {
            model.Id = entity.Id;
            model.InfoStr = entity.InfoStr;
        }

        protected abstract DbSet<TEntity> GetSet(KuLibDbContext dbc);
    }
}
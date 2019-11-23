using KuLib.Dto.Publications;
using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Interfaces
{
    /// <summary>
    /// Интерфейс работы с публикациями
    /// </summary>
    public interface IPublicationService
    {
        /// <summary>
        /// Метод создания публикации
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        Publication Create(PublicationEditDto model);

        /// <summary>
        /// Метод редактирования публикации
        /// </summary>
        /// <param name="model"></param>
        void Update(PublicationEditDto model);

        /// <summary>
        /// Метод получения публикации
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        PublicationEditDto Get(long id);

        /// <summary>
        /// Метод проекции публикации
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        PublicationEditDto Project(Publication entity);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Publications
{
    public class PublicationEditDto
    {
        /// <summary>
        /// Идентификатор
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// Информационная строка
        /// </summary>
        public string InfoStr { get; set; }

        /// <summary>
        /// Псевдоним окна редактирования
        /// </summary>
        public string WindowXType { get; set; }
    }
}
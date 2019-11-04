using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Models.Arguments
{
    /// <summary>
    /// Аргументы получения списка
    /// </summary>
    public class PublicationListArgs : BaseListArgs
    {
        /// <summary>
        /// Фильтр по информационной строке
        /// </summary>
        public string InfoStrFilter { get; set; }
    }
}
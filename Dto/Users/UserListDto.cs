using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Users
{
    /// <summary>
    /// Модель строки грида пользователей
    /// </summary>
    public class UserListDto
    {
        /// <summary>
        /// Идентификатор
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// Полное имя пользователя
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Дата рождения
        /// </summary>
        public DateTime BirthDate { get; set; }
    }
}
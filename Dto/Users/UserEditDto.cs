using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Users
{
    /// <summary>
    /// Модель окна пользователя
    /// </summary>
    public class UserEditDto : UserListDto
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

        /// <summary>
        /// Имя
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Фамилия
        /// </summary>
        public string Surname { get; set; }

        /// <summary>
        /// Отчество
        /// </summary>
        public string Patronymic { get; set; }
    }
}
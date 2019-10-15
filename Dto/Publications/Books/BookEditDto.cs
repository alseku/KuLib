using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Publications.Books
{
    /// <summary>
    /// Модель для редактирования или создания объекта книги
    /// </summary>
    public class BookEditDto
    {
        /// <summary>
        /// Идентификатор
        /// </summary>
        public long Id { get; set; }

        /// <summary>
        /// Информационная строка
        /// </summary>
        public string InfoStr { get; set; }
    }
}
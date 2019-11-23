using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Dto.Publications.Books
{
    /// <summary>
    /// Модель для редактирования или создания объекта книги
    /// </summary>
    public class BookEditDto : PublicationEditDto
    {
        /// <summary>
        /// Наименование
        /// </summary>
        public string BookTitle { get; set; }

        /// <summary>
        /// Автор
        /// </summary>
        public string Author { get; set; }
    }
}
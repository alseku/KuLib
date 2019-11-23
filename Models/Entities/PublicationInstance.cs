using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace KuLib.Models.Entities
{
    /// <summary>
    /// Экземпляр публикации
    /// </summary>
    public class PublicationInstance
    {
        [Key]
        public long Id { get; set; }

        /// <summary>
        /// Ссылка на публикацию
        /// </summary>
        [Required]
        public virtual Publication Publication { get; set; }

        /// <summary>
        /// Арендующий пользователь
        /// </summary>
        public virtual User RentingUser { get; set; }

        /// <summary>
        /// Дата, до которой книгу необходимо вернуть
        /// </summary>
        public DateTime? ReturnDate { get; set; }
    }
}
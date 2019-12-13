using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Models.Arguments
{
    /// <summary>
    /// Аргументы получения списка
    /// </summary>
    public class UserListArgs : BaseListArgs
    {
        /// <summary>
        /// Есть задолженность
        /// </summary>
        public bool HasExpired { get; set; }

        public string query { get; set; }
    }
}
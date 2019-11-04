using KuLib.Models.Arguments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Extensions
{
    public static class QueryExtension
    {
        public static IQueryable<TEntity> Page<TEntity, TArgs>(this IQueryable<TEntity> query, TArgs args)
            where TArgs : BaseListArgs
        {
            return query.Skip(args.Start).Take(args.Limit);
        }
    }
}
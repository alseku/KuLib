using KuLib.Dto.Publications.Books;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace KuLib.Services.Publications
{
    /// <summary>
    /// Сервис для работы с книгами
    /// </summary>
    public class BookService : BasePublicationService<Book, BookEditDto>
    {
        /// <summary>
        /// Метод заполнения сущности на основе модели
        /// </summary>
        /// <param name="book"></param>
        /// <param name="model"></param>
        protected override void FillFromModel(Book book, BookEditDto model)
        {
            base.FillFromModel(book, model);
            book.BookTitle = model.BookTitle;
            book.Author = model.Author;
            book.InfoStr = $"{book.BookTitle} ({book.Year}), {book.Author}";
        }

        protected override void FillFromEntity(BookEditDto model, Book entity)
        {
            base.FillFromEntity(model, entity);
            model.BookTitle = entity.BookTitle;
            model.Author = entity.Author;
            model.WindowXType = "bookwindow";
        }

        protected override DbSet<Book> GetSet(KuLibDbContext dbc)
        {
            return dbc.Books;
        }
    }
}
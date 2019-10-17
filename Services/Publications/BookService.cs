using KuLib.Dto.Publications.Books;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Services.Publications
{
    /// <summary>
    /// Сервис для работы с книгами
    /// </summary>
    public class BookService
    {
        /// <summary>
        /// Метод создания новой книги
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public Book Create(BookEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var newBook = new Book();
                FillFromModel(newBook, model);

                dbc.Books.Add(newBook);
                dbc.SaveChanges();

                return newBook;
            }
        }

        /// <summary>
        /// Метод редактирования книги
        /// </summary>
        /// <param name="model"></param>
        public void Update(BookEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var book = dbc.Books.Find(model.Id);
                FillFromModel(book, model);

                dbc.SaveChanges();
            }
        }

        /// <summary>
        /// Метод получения ммодели книги
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public BookEditDto Get(long id)
        {
            using (var dbc = new KuLibDbContext())
            {
                var book = dbc.Books.Find(id);
                var model = new BookEditDto
                {
                    Id = book.Id,
                    Author = book.Author,
                    BookTitle = book.BookTitle,
                    InfoStr = book.InfoStr
                };

                return model;
            }
        }

        /// <summary>
        /// Метод удаления книги
        /// </summary>
        /// <param name="id"></param>
        public void Delete(long id)
        {
            using (var dbc = new KuLibDbContext())
            {
                var book = dbc.Books.Find(id);
                dbc.Books.Remove(book);

                dbc.SaveChanges();
            }
        }

        /// <summary>
        /// Метод заполнения сущности на основе модели
        /// </summary>
        /// <param name="book"></param>
        /// <param name="model"></param>
        private void FillFromModel(Book book, BookEditDto model)
        {
            book.InfoStr = model.InfoStr;
            book.BookTitle = model.BookTitle;
            book.Author = model.Author;
        }
    }
}
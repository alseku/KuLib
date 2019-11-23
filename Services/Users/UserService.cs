using KuLib.Dto.Publications.Books;
using KuLib.Dto.Users;
using KuLib.Models.Entities;
using KuLib.Models.Entities.Publications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KuLib.Services.Users
{
    /// <summary>
    /// Сервис для работы с книгами
    /// </summary>
    public class UserService
    {
        /// <summary>
        /// Метод создания новой книги
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public User Create(UserEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var newUser = new User();
                FillFromModel(newUser, model);

                dbc.Users.Add(newUser);
                dbc.SaveChanges();

                return newUser;
            }
        }

        /// <summary>
        /// Метод редактирования книги
        /// </summary>
        /// <param name="model"></param>
        public void Update(UserEditDto model)
        {
            using (var dbc = new KuLibDbContext())
            {
                var user = dbc.Users.Find(model.Id);
                FillFromModel(user, model);

                dbc.SaveChanges();
            }
        }

        /// <summary>
        /// Метод получения ммодели книги
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public UserEditDto Get(long id)
        {
            using (var dbc = new KuLibDbContext())
            {
                var user = dbc.Users.Find(id);
                var model = new UserEditDto
                {
                    Id = user.Id,
                    Name = user.Name,
                    Surname = user.Surname,
                    Patronymic = user.Patronymic,
                    FullName = user.FullName,
                    BirthDate = user.BirthDate,
                    IdentString = user.IdentString
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
                var user = dbc.Users.Find(id);
                dbc.Users.Remove(user);

                dbc.SaveChanges();
            }
        }

        /// <summary>
        /// Метод заполнения сущности на основе модели
        /// </summary>
        /// <param name="user"></param>
        /// <param name="model"></param>
        private void FillFromModel(User user, UserEditDto model)
        {
            user.Name = model.Name;
            user.Surname = model.Surname;
            user.Patronymic = model.Patronymic;
            user.FullName = $"{user.Surname} {user.Name} {user.Patronymic}";
            user.ShortName = $"{user.Surname} {user.Name[0]}.{user.Patronymic[0]}.";
            user.BirthDate = model.BirthDate;
            user.IdentString = $"{user.ShortName}, {user.BirthDate.ToString("dd.MM.yy")}";
        }
    }
}
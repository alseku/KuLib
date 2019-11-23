using System.Data.Entity;
using System.ComponentModel.DataAnnotations;
using KuLib.Models.Entities.Publications;
using KuLib.Models.Entities;
//using System.Diagnostics;

namespace KuLib.Models.Entities
{
    public class KuLibDbContext : DbContext
    {
        public KuLibDbContext() : base()
        {
           Database.Connection.ConnectionString = @"Data Source=(localdb)\mssqllocaldb;Integrated Security=True;MultipleActiveResultSets=True;Initial Catalog=KuLibDB;AttachDBFilename=|DataDirectory|\KuLibDB.mdf";
           //System.Diagnostics.Debug.WriteLine(Database.Connection.ConnectionString);

            // Будем видеть, какие команды EF отправляет к БД:
            Database.Log = (s => System.Diagnostics.Debug.WriteLine(s));

            // Указываем EF, что если модель изменилась,
            // то нужно пересоздать базу данных с новой структурой
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<KuLibDbContext>());

            this.Database.Initialize(false);
        }

        public DbSet<Publication> Publications { get; set; }
        public DbSet<Book> Books { get; set; }
        //public DbSet<SerialBook> SerialBooks { get; set; }
        //public DbSet<Collection> Collections { get; set; }
        public DbSet<JournalIssue> JournalIssues { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<PublicationInstance> PublicationInstances { get; set; }
    }
}
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NDTC_WebAPI.Models
{
    public class NDTC_Context : DbContext
    {
        public NDTC_Context(DbContextOptions<NDTC_Context> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //modelBuilder.HasSequence<int>("User")
            //.StartsAt(1000)
            //.IncrementsBy(1);

            //modelBuilder.Entity<User>()
            //    .Property(o => o.UserId)
            //    .HasDefaultValueSql("NEXT VALUE FOR praveenb.Users_seq");

            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2");

            //modelBuilder.Entity<User>()
            //.HasKey(p => new { p.UserId });
            //modelBuilder.Entity<User>().Property(p => p.UserId).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            modelBuilder.Entity<User>(u =>
            {   
                u.HasOne<Address>(s => s.Address)
                            .WithOne(ad => ad.User)
                            .HasForeignKey<Address>(ad => ad.AddressId);
               
                u.Property(t => t.FirstName).IsRequired();
                u.Property(t => t.LastName).IsRequired();
                u.Property(t => t.Email).IsRequired();
                u.Property(t => t.Gender).IsRequired();
                u.Property(t => t.Phone).IsRequired();
                u.Property(t => t.Password).IsRequired();
                u.HasIndex(p => p.Email).IsUnique(true);
                u.HasIndex(p => p.Phone).IsUnique(true);
                u.Property<int>("UserId")
                    .ValueGeneratedOnAdd();

                u.ToTable("Users");
               
            });
            
            //u.Property(p => p.UserId).HasValueGenerator(DatabaseGeneratedOption.Identity + 1000);



            // base.OnModelCreating(builder);
            //  modelBuilder.HasSequence<int>("Users", schema: "praveenb").StartsAt(1000).IncrementsBy(1);
            //modelBuilder.HasSequence<int>("users", schema: "praveenb").StartsAt(10000000).IncrementsBy(1);
            //modelBuilder.HasSequence<int>("MySequence", schema: "shared").StartsAt(10000000).IncrementsBy(1);

            // modelBuilder.Entity<Company>()
            //.Property(o => o.StakeholderNumber)
            //.HasDefaultValueSql("NEXT VALUE FOR shared.MySequence");

            //modelBuilder
            //    .HasAnnotation("ProductVersion", "1.1.2");

            //modelBuilder.Entity("Tetromino.Models.User", b =>
            //{
            //    b.Property<int>("Id")
            //        .ValueGeneratedOnAdd();

            //    b.Property<string>("Name")
            //        .IsRequired();

            //    b.HasKey("Id");

            //    b.ToTable("Users");
            //});
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }

    }
    }

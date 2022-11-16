using Microsoft.EntityFrameworkCore;
using UbyTecAPI.Models;

namespace UbyTecAPI.Data
{
    public class UbyTecDb:DbContext
    {
        public UbyTecDb(DbContextOptions<UbyTecDb> options) : base(options)
        {
            
        }
        public DbSet<Empleado> empleado => Set<Empleado>();
        public DbSet<Cliente> cliente => Set<Cliente>();
        public DbSet<AdministradorAfiliado> administrador_afiliado => Set<AdministradorAfiliado>();
        public DbSet<ComercioAfiliado> comercio_afiliado => Set<ComercioAfiliado>();
        public DbSet<Pedido> pedido => Set<Pedido>();
        public DbSet<Producto> producto => Set<Producto>();
        public DbSet<Repartidor> repartidor => Set<Repartidor>();
        public DbSet<TelefonoAdmin> telefono_admin => Set<TelefonoAdmin>();
        public DbSet<TelefonoCom> telefono_com => Set<TelefonoCom>();
        public DbSet<TelefonoRep> telefono_rep=> Set<TelefonoRep>();
        public DbSet<TelefonoEmp> telefono_emp=> Set<TelefonoEmp>();

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TelefonoAdmin>().HasKey(x => new { x.telefono, x.a_usuario });
            modelBuilder.Entity<TelefonoRep>().HasKey(x => new { x.telefono, x.re_usuario });
            modelBuilder.Entity<TelefonoCom>().HasKey(x => new { x.telefono, x.co_cedula });
            modelBuilder.Entity<TelefonoEmp>().HasKey(x => new { x.telefono, x.e_cedula });


        }
    }
}

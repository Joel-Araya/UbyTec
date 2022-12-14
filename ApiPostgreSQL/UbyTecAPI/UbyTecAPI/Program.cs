using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using System.Data;
using System.Runtime.CompilerServices;
using System.Text;
using UbyTecAPI;
using UbyTecAPI.Data;
using UbyTecAPI.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var connectionString = builder.Configuration.GetConnectionString("PostgreSQLConnection");
builder.Services.AddDbContext<UbyTecDb>(options => options.UseNpgsql(connectionString));


var misReglasCors = "ReglasCors";

builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: misReglasCors, builder =>
    {
        builder.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod();
    });
});




var app = builder.Build();

/*// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
*/

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(misReglasCors);
app.UseHttpsRedirection();


// ========================================================= M?todos CRUD para Empleado =========================================================

var empleadosItems = app.MapGroup("/Empleados");

// M?todo post  para crear un empleado
empleadosItems.MapPost("/", async (Empleado e, UbyTecDb db) =>
{
    db.empleado.Add(e);
    await db.SaveChangesAsync();
    return Results.Created($"empleado/{e.cedula}", e);
});

empleadosItems.MapGet("/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    return await db.empleado.FindAsync(cedula) is Empleado e ? Results.Ok(e) : Results.NotFound();
});

empleadosItems.MapGet("/Login/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    var empleadoLogin = await db.empleado.FindAsync(cedula);
    if (empleadoLogin is null) return Results.Ok("El usuario ingresado no existe");
    return Results.Ok(empleadoLogin);
});

empleadosItems.MapGet("", async (UbyTecDb db) => await db.empleado.ToListAsync());

empleadosItems.MapPut("/{cedula:int}", async (int cedula, Empleado e, UbyTecDb db) =>
{
    if (e.cedula != cedula) return Results.BadRequest();
    var empleado = await db.empleado.FindAsync(cedula);
    if (empleado is null) return Results.NotFound();

    empleado.usuario = e.usuario;
    empleado.password = e.password;
    empleado.nombre = e.nombre;
    empleado.provincia = e.provincia;
    empleado.canton = e.canton;
    empleado.distrito = e.distrito;

    await db.SaveChangesAsync();
    return Results.Ok(empleado);
});

// Borra empleado mediante procedimiento almacenado
empleadosItems.MapDelete("/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    var empleado = await db.empleado.FindAsync(cedula);
    if (empleado is null) return Results.NotFound();

    using (NpgsqlConnection con = new NpgsqlConnection(connectionString))
    {
        using (NpgsqlCommand command = new NpgsqlCommand("call eliminarEmpleado(:cedula_id);", con))
        {
            command.CommandType = CommandType.Text;
            command.Parameters.AddWithValue("cedula_id", DbType.Int64).Value = cedula;
            con.Open();
            command.ExecuteNonQuery();
        }
    }

    return Results.NoContent();
});


// ========================================================= M?todos CRUD para Cliente =========================================================
var clientesItems = app.MapGroup("/Clientes");

// M?todo post  para crear un cliente
clientesItems.MapPost("/", async (Cliente c, UbyTecDb db) =>
{
    db.cliente.Add(c);
    await db.SaveChangesAsync();
    return Results.Created($"cliente/{c.cedula}", c);
});

clientesItems.MapGet("/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    return await db.cliente.FindAsync(cedula) is Cliente c ? Results.Ok(c) : Results.NotFound();
});

//Login Clientes
clientesItems.MapGet("/Login/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    var clienteLogin = await db.cliente.FindAsync(cedula);
    if (clienteLogin is null) return Results.Ok("El usuario ingresado no existe");
    return Results.Ok(clienteLogin);
});

clientesItems.MapGet("", async (UbyTecDb db) => await db.cliente.ToListAsync());

clientesItems.MapPut("/{cedula:int}", async (int cedula, Cliente c, UbyTecDb db) =>
{
    if (c.cedula != cedula) return Results.BadRequest();
    var cliente = await db.cliente.FindAsync(cedula);
    if (cliente is null) return Results.NotFound();

    cliente.usuario = c.usuario;
    cliente.password = c.password;
    cliente.nombre = c.nombre;
    cliente.apellido1 = c.apellido1;
    cliente.apellido2 = c.apellido2;
    cliente.provincia = c.provincia;
    cliente.canton = c.canton;
    cliente.distrito = c.distrito;
    cliente.telefono = c.telefono;

    await db.SaveChangesAsync();
    return Results.Ok(cliente);
});
// M?todo delete para crear un telefono para un administrador
clientesItems.MapDelete("/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    var cliente = await db.cliente.FindAsync(cedula);
    if (cliente is null) return Results.NotFound();
    db.cliente.Remove(cliente);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


// ========================================================= M?todos CRUD para Administrador Afiliado =========================================================
var aministradoresAfiliadosItems = app.MapGroup("/Administradores_Afiliados");

//Inserta administrador afiliado y env?a contrase?a a su email
aministradoresAfiliadosItems.MapPost("/", async (AdministradorAfiliado a, UbyTecDb db) =>
{
    EmailPasswordManager managerEmail = new EmailPasswordManager();
    a.password = managerEmail.GeneratePassword();
    managerEmail.EmailSend(a.correo, a.password);

    db.administrador_afiliado.Add(a);
    await db.SaveChangesAsync();
    return Results.Created($"administrador_afiliado/{a.usuario}", a);
});

aministradoresAfiliadosItems.MapGet("/{usuario}", async (string? usuario, UbyTecDb db) =>
{
    return await db.administrador_afiliado.FindAsync(usuario) is AdministradorAfiliado a ? Results.Ok(a) : Results.NotFound();
});

// Login administrador afiliado
aministradoresAfiliadosItems.MapGet("/Login/{usuario}", async (string? usuario, UbyTecDb db) =>
{
    var adminAfiliadoLogin = await db.administrador_afiliado.FindAsync(usuario);
    if (adminAfiliadoLogin is null) return Results.Ok("El usuario ingresado no existe");
    return Results.Ok(adminAfiliadoLogin);
});

aministradoresAfiliadosItems.MapGet("", async (UbyTecDb db) => await db.administrador_afiliado.ToListAsync());

aministradoresAfiliadosItems.MapPut("/{usuario}", async (string? usuario, AdministradorAfiliado a, UbyTecDb db) =>
{
    if (a.usuario != usuario) return Results.BadRequest();
    var administrador_afiliado = await db.administrador_afiliado.FindAsync(usuario);
    if (administrador_afiliado is null) return Results.NotFound();

    administrador_afiliado.usuario = a.usuario;
    administrador_afiliado.correo = a.correo;
    administrador_afiliado.password = a.password;
    administrador_afiliado.nombre = a.nombre;
    administrador_afiliado.provincia = a.provincia;
    administrador_afiliado.canton = a.canton;
    administrador_afiliado.distrito = a.distrito;

    await db.SaveChangesAsync();
    return Results.Ok(administrador_afiliado);
});

aministradoresAfiliadosItems.MapDelete("/{usuario}", async (string? usuario, UbyTecDb db) =>
{
    var administrador_afiliado = await db.administrador_afiliado.FindAsync(usuario);
    if (administrador_afiliado is null) return Results.NotFound();

    using (NpgsqlConnection con = new NpgsqlConnection(connectionString))
    {
        using (NpgsqlCommand command = new NpgsqlCommand("call eliminarAdmin(:usuario_id);", con))
        {
            command.CommandType = CommandType.Text;
            command.Parameters.AddWithValue("usuario_id", DbType.Int64).Value = usuario;
            con.Open();
            command.ExecuteNonQuery();
        }
    }

    return Results.NoContent();
});


// ========================================================= M?todos CRUD para Comercio Afiliado =========================================================
var comerciosAfiliadosItems = app.MapGroup("/Comercios_Afiliados");

// M?todo post  para crear un comercio afiliado
comerciosAfiliadosItems.MapPost("/", async (ComercioAfiliado c, UbyTecDb db) =>
{
    db.comercio_afiliado.Add(c);
    await db.SaveChangesAsync();
    return Results.Created($"comercio_afiliado/{c.cedula}", c);
});

//Filtro por comercios aceptados
comerciosAfiliadosItems.MapGet("/Aceptados", async (UbyTecDb db) =>
{
    var comerciosAceptados = db.comercio_afiliado.Where(x=>x.estado.Equals("Aceptado"));
    return comerciosAceptados;
});

//Filtro por comercios en espera
comerciosAfiliadosItems.MapGet("/EnEspera", async (UbyTecDb db) =>
{
    var comerciosAceptados = db.comercio_afiliado.Where(x=>x.estado.Equals("En espera"));
    return comerciosAceptados;
});

//Filtro por comercios en Rechazado
comerciosAfiliadosItems.MapGet("/Rechazados", async (UbyTecDb db) =>
{
    var comerciosAceptados = db.comercio_afiliado.Where(x=>x.estado.Equals("Rechazado"));
    return comerciosAceptados;
});

// M?todo get para obtener a todos los comercios
comerciosAfiliadosItems.MapGet("/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    return await db.comercio_afiliado.FindAsync(cedula) is ComercioAfiliado c ? Results.Ok(c) : Results.NotFound();
});

comerciosAfiliadosItems.MapGet("", async (UbyTecDb db) => await db.comercio_afiliado.ToListAsync());

comerciosAfiliadosItems.MapPut("/{cedula:int}", async (int cedula, ComercioAfiliado c, UbyTecDb db) =>
{
    if (c.cedula != cedula) return Results.BadRequest();
    var comercio_afiliado = await db.comercio_afiliado.FindAsync(cedula);
    if (comercio_afiliado is null) return Results.NotFound();

    comercio_afiliado.tipo_comercio = c.tipo_comercio;
    comercio_afiliado.nombre_comercio = c.nombre_comercio;
    comercio_afiliado.num_sinpe = c.num_sinpe;
    comercio_afiliado.administrador_comercio = c.administrador_comercio;
    comercio_afiliado.correo = c.correo;
    comercio_afiliado.provincia = c.provincia;
    comercio_afiliado.canton = c.canton;
    comercio_afiliado.distrito = c.distrito;
    comercio_afiliado.a_usuario = c.a_usuario;
    comercio_afiliado.estado = c.estado;

    await db.SaveChangesAsync();
    return Results.Ok(comercio_afiliado);
});

//Pone el estado del comercio en Aceptado o Rechazado
comerciosAfiliadosItems.MapPut("/{cedula:int}/Aceptado", async (int cedula, string? estado, UbyTecDb db) =>
{
    if (estado.Equals("Aceptado") == false && estado.Equals("Rechazado") == false) return Results.BadRequest();
    var comercio_afiliado = await db.comercio_afiliado.FindAsync(cedula);
    if (comercio_afiliado is null) return Results.NotFound();

    comercio_afiliado.estado =  estado; //"Aceptado" o "Rechazado"

    await db.SaveChangesAsync();
    return Results.Ok(comercio_afiliado);
});


//Pone el estado del comercio en Aceptado
comerciosAfiliadosItems.MapPut("/{cedula:int}/Aceptado", async (int cedula, UbyTecDb db) =>
{
    var comercio_afiliado = await db.comercio_afiliado.FindAsync(cedula);
    if (comercio_afiliado is null) return Results.NotFound();

    comercio_afiliado.estado = "Aceptado";

    await db.SaveChangesAsync();
    return Results.Ok(comercio_afiliado);
});

//Pone el estado del comercio en Rechazado
comerciosAfiliadosItems.MapPut("/{cedula:int}/Rechazado", async (int cedula, UbyTecDb db) =>
{
    var comercio_afiliado = await db.comercio_afiliado.FindAsync(cedula);
    if (comercio_afiliado is null) return Results.NotFound();

    comercio_afiliado.estado = "Rechazado";

    await db.SaveChangesAsync();
    return Results.Ok(comercio_afiliado);
});

comerciosAfiliadosItems.MapDelete("/{cedula:int}", async (int cedula, UbyTecDb db) =>
{
    var comercio_afiliado = await db.comercio_afiliado.FindAsync(cedula);
    if (comercio_afiliado is null) return Results.NotFound();

    using (NpgsqlConnection con = new NpgsqlConnection(connectionString))
    {
        using (NpgsqlCommand command = new NpgsqlCommand("call eliminarComercio(:cedula_id);", con))
        {
            command.CommandType = CommandType.Text;
            command.Parameters.AddWithValue("cedula_id", DbType.Int64).Value = cedula;
            con.Open();
            command.ExecuteNonQuery();
        }
    }

    return Results.NoContent();
});

// ========================================================= M?todos CRUD para Pedido =========================================================
var pedidosItems = app.MapGroup("/Pedidos");

// M?todo post  para crear un pedido
pedidosItems.MapPost("/", async (Pedido p, UbyTecDb db) =>
{
    db.pedido.Add(p);
    await db.SaveChangesAsync();
    return Results.Created($"pedido/{p.comprobante}", p);
});

pedidosItems.MapGet("/{comprobante:int}", async (int comprobante, UbyTecDb db) =>
{
    return await db.pedido.FindAsync(comprobante) is Pedido p ? Results.Ok(p) : Results.NotFound();
});

/*pedidosItems.MapGet("/{co_cedula:int}", async (int co_cedula, UbyTecDb db) =>
{

    return await db.pedido.FindAsync(comprobante) is Pedido p ? Results.Ok(p) : Results.NotFound();
});*/

pedidosItems.MapGet("", async (UbyTecDb db) => await db.pedido.ToListAsync());

pedidosItems.MapGet("/Preparando", async (UbyTecDb db) => { return db.pedido.Where(x => x.estado.Equals("Preparando"));});

pedidosItems.MapPut("/{comprobante:int}", async (int comprobante, Pedido p, UbyTecDb db) =>
{
    if (p.comprobante != comprobante) return Results.BadRequest();
    var pedido = await db.pedido.FindAsync(comprobante);
    if (pedido is null) return Results.NotFound();

    pedido.estado = p.estado;
    pedido.c_cedula = p.c_cedula;
    pedido.re_usuario = p.re_usuario;

    pedido.provincia = p.provincia;
    pedido.canton = p.canton;
    pedido.distrito = p.distrito;

    await db.SaveChangesAsync();
    return Results.Ok(pedido);
});

// Actualiza la informaci?n del pedido para asignarle un repartidor
pedidosItems.MapPut("/{comprobante:int}/EnCamino", async (int comprobante, UbyTecDb db) =>
{
    var pedido = await db.pedido.FindAsync(comprobante);
    if (pedido is null) return Results.NotFound();


    using (NpgsqlConnection con = new NpgsqlConnection(connectionString))
    {
        using (NpgsqlCommand command = new NpgsqlCommand("call set_pedido(:comprobante_id, :provincia_ped, :canton_ped, :distrito_ped);", con))
        {

            command.CommandType = CommandType.Text;
            command.Parameters.AddWithValue("comprobante_id", DbType.Int64).Value = comprobante;
            command.Parameters.AddWithValue("provincia_ped", DbType.String).Value = pedido.provincia;
            command.Parameters.AddWithValue("canton_ped", DbType.String).Value = pedido.canton;
            command.Parameters.AddWithValue("distrito_ped", DbType.String).Value = pedido.distrito;
            con.Open();
            command.ExecuteNonQuery();

        }
    }

    //var newPedido = await db.pedido.Update(pedido);
    //pedido.estado = "En camino"
    return Results.Ok("El pedido se encuentra en camino");
});


// Actualiza la informaci?n del pedido al finalizarlo
pedidosItems.MapPut("/{comprobante:int}/Finalizado", async (int comprobante, UbyTecDb db) =>
{
    var pedido = await db.pedido.FindAsync(comprobante);
    if (pedido is null) return Results.NotFound();


    using (NpgsqlConnection con = new NpgsqlConnection(connectionString))
    {
        using (NpgsqlCommand command = new NpgsqlCommand("call recepcion_pedido(:comprobante_id, :re_usuario_id);", con))
        {

            command.CommandType = CommandType.Text;
            command.Parameters.AddWithValue("comprobante_id", DbType.Int64).Value = comprobante;
            command.Parameters.AddWithValue("re_usuario_id", DbType.String).Value = pedido.re_usuario;
            con.Open();
            command.ExecuteNonQuery();

        }
    }


    pedido.estado = "Finalizado";
    return Results.Ok("El pedido ha sido completado");
});

pedidosItems.MapDelete("/{comprobante:int}", async (int comprobante, UbyTecDb db) =>
{
    var pedido = await db.pedido.FindAsync(comprobante);
    if (pedido is null) return Results.NotFound();
    db.pedido.Remove(pedido);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


// ========================================================= M?todos CRUD para Productos =========================================================
var productosItems = app.MapGroup("/Productos");

// M?todo post  para crear un producto
productosItems.MapPost("/", async (Producto p, UbyTecDb db) =>
{
    db.producto.Add(p);
    await db.SaveChangesAsync();
    return Results.Created($"producto/{p.nombre}", p);
});

productosItems.MapGet("/{nombre}", async (string? nombre, UbyTecDb db) =>
{
    return await db.producto.FindAsync(nombre) is Producto p ? Results.Ok(p) : Results.NotFound();
});

productosItems.MapGet("", async (UbyTecDb db) => await db.producto.ToListAsync());

//Filtro de productos seg?n el comercio
productosItems.MapGet("/{co_cedula:int}", async (int co_cedula, UbyTecDb db) =>
{
    var productosComercio = db.producto.Where(x => x.co_cedula.Equals(co_cedula));
    return productosComercio;
});




productosItems.MapPut("/{nombre}", async (string? nombre, Producto p, UbyTecDb db) =>
{
    if (p.nombre != nombre) return Results.BadRequest();
    var producto = await db.producto.FindAsync(nombre);
    if (producto is null) return Results.NotFound();

    producto.categoria = p.categoria;
    producto.precio = p.precio;
    producto.foto = p.foto;
    producto.co_cedula = p.co_cedula; //Llave for?nea //Revisar si esto se debe poder cambiar


    await db.SaveChangesAsync();
    return Results.Ok(producto);
});

productosItems.MapDelete("/{nombre}", async (string? nombre, UbyTecDb db) =>
{
    var producto = await db.producto.FindAsync(nombre);
    if (producto is null) return Results.NotFound();
    db.producto.Remove(producto);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


// ========================================================= M?todos CRUD para Producto_Pedido =========================================================

var productosPedidosItems = app.MapGroup("/ProductosPedidos");

// M?todo post  para crear un Producto de un pedido
productosPedidosItems.MapPost("/", async (ProductoPedido p, UbyTecDb db) =>
{
    db.producto_pedido.Add(p);
    await db.SaveChangesAsync();
    return Results.Created($"producto_pedido/{p.pe_comprobante}", p);
});

productosPedidosItems.MapGet("/{pe_comprobante:int}", async (int pe_comprobante, UbyTecDb db) =>
{
    var productoPedido= db.producto_pedido.Where(x => x.pe_comprobante.Equals(pe_comprobante));
    return productoPedido;
});


productosPedidosItems.MapGet("", async (UbyTecDb db) => await db.producto_pedido.ToListAsync());

productosPedidosItems.MapPut("/{comprobante}", async (int comprobante, ProductoPedido p, UbyTecDb db) =>
{
    if (p.pe_comprobante != comprobante) return Results.BadRequest();
    var productoPedido = await db.producto_pedido.FindAsync(comprobante, p.pr_nombre,p.co_cedula);
    if (productoPedido is null) return Results.NotFound();

    
    productoPedido.pr_nombre= p.pr_nombre;
    productoPedido.co_cedula = p.co_cedula; //Llave for?nea //Revisar si esto se debe poder cambiar
    productoPedido.pe_comprobante = comprobante;
    productoPedido.re_usuario= p.re_usuario;
    productoPedido.cantidad= p.cantidad;

    await db.SaveChangesAsync();
    return Results.Ok(productoPedido);
});

productosPedidosItems.MapDelete("/{comprobante:int}/{pr_nombre}/{co_cedula:int}", async (string? pr_nombre, int co_cedula, int comprobante, UbyTecDb db) =>
{
    var productoPedido = await db.producto_pedido.FindAsync(pr_nombre,co_cedula,comprobante);
    if (productoPedido is null) return Results.NotFound();
    db.producto_pedido.Remove(productoPedido);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


// ========================================================= M?todos CRUD para Repartidor =========================================================
var repartidorItems = app.MapGroup("/Repartidores");

// M?todo post  para crear un Repartidor
repartidorItems.MapPost("/", async (Repartidor r, UbyTecDb db) =>
{
    EmailPasswordManager managerEmail = new EmailPasswordManager();
    r.password = managerEmail.GeneratePassword();
    managerEmail.EmailSend(r.correo, r.password);



    db.repartidor.Add(r);
    await db.SaveChangesAsync();
    return Results.Created($"repartidor/{r.usuario}", r);
});

repartidorItems.MapGet("/{usuario}", async (string? usuario, UbyTecDb db) =>
{
    return await db.repartidor.FindAsync(usuario) is Repartidor r ? Results.Ok(r) : Results.NotFound();
});


// Login repartidor
repartidorItems.MapGet("/Login/{usuario}", async (string? usuario, UbyTecDb db) =>
{
    var repartidorLogin = await db.repartidor.FindAsync(usuario);
    if (repartidorLogin is null) return Results.Ok("El usuario ingresado no existe");
    return Results.Ok(repartidorLogin);
});

repartidorItems.MapGet("", async (UbyTecDb db) => await db.repartidor.ToListAsync());

repartidorItems.MapPut("/{usuario}", async (string? usuario, Repartidor r, UbyTecDb db) =>
{
    if (r.usuario != usuario) return Results.BadRequest();
    var repartidor = await db.repartidor.FindAsync(usuario);
    if (repartidor is null) return Results.NotFound();

    repartidor.usuario = r.usuario;
    repartidor.correo = r.correo;
    repartidor.password = r.password;
    repartidor.nombre = r.nombre;
    repartidor.provincia = r.provincia;
    repartidor.canton = r.canton;
    repartidor.distrito = r.distrito;
    repartidor.estado = r.estado;

    await db.SaveChangesAsync();
    return Results.Ok(repartidor);
});

repartidorItems.MapDelete("/{usuario}", async (string? usuario, UbyTecDb db) =>
{

    Console.WriteLine("Entr? al api");
    var repartidor = await db.repartidor.FindAsync(usuario);
    if (repartidor is null) return Results.NotFound();
    db.repartidor.Remove(repartidor);
    await db.SaveChangesAsync();
    return Results.NoContent();
});



// ========================================================= M?todos CRUD para Telefono Admin =========================================================
var telefonosAdminItems = app.MapGroup("/Telefonos_Admin");
// M?todo post  para crear un telefono para un administrador afiliado
telefonosAdminItems.MapPost("/", async (TelefonoAdmin t, UbyTecDb db) =>
{
    db.telefono_admin.Add(t);
    await db.SaveChangesAsync();
    return Results.Created($"telefono_admin/{t.telefono}", t);
});

telefonosAdminItems.MapGet("/{a_usuario}/{telefono:int}", async (string a_usuario, int telefono, UbyTecDb db) =>
{
    return await db.telefono_admin.FindAsync(telefono, a_usuario) is TelefonoAdmin t ? Results.Ok(t) : Results.NotFound();
});

// Filtrado por usuario 
telefonosAdminItems.MapGet("/{a_usuario}", async (string a_usuario, UbyTecDb db) =>
{
    if ((db.telefono_admin.Any(x => x.a_usuario == a_usuario) || (db.administrador_afiliado.Any(x => x.usuario == a_usuario))) is false) return Results.NotFound();
    var filtroUsuario = db.telefono_admin.Select(x => new { x.telefono, x.a_usuario }).Where(x => x.a_usuario == a_usuario).ToList();
    return Results.Ok(filtroUsuario);
});

telefonosAdminItems.MapGet("", async (UbyTecDb db) => await db.telefono_admin.ToListAsync());

telefonosAdminItems.MapPut("/{a_usuario}/{telefono:int}", async (string a_usuario, int telefono, TelefonoAdmin t, UbyTecDb db) =>
{
    if (t.telefono != telefono) return Results.BadRequest();
    var telefonoAdmin = await db.telefono_admin.FindAsync(telefono, a_usuario);
    if (telefonoAdmin is null) return Results.NotFound();

    telefonoAdmin.a_usuario = t.a_usuario;

    await db.SaveChangesAsync();
    return Results.Ok(telefonoAdmin);
});

telefonosAdminItems.MapDelete("/{a_usuario}/{telefono:int}", async (string a_usuario, int telefono, UbyTecDb db) =>
{
    var telefonoAdmin = await db.telefono_admin.FindAsync(telefono, a_usuario);
    if (telefonoAdmin is null) return Results.NotFound();
    db.telefono_admin.Remove(telefonoAdmin);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

// ========================================================= M?todos CRUD para Telefono Rep =========================================================
var telefonosRepItems = app.MapGroup("/Telefonos_Rep");
// M?todo post  para crear un telefono para un repartidor
telefonosRepItems.MapPost("/", async (TelefonoRep t, UbyTecDb db) =>
{
    db.telefono_rep.Add(t);
    await db.SaveChangesAsync();
    return Results.Created($"telefono_rep/{t.telefono}", t);
});

telefonosRepItems.MapGet("/{re_usuario}/{telefono:int}", async (string re_usuario, int telefono, UbyTecDb db) =>
{
    return await db.telefono_rep.FindAsync(telefono, re_usuario) is TelefonoRep t ? Results.Ok(t) : Results.NotFound();
});

// Filtrado por usuario 
telefonosRepItems.MapGet("/{re_usuario}", async (string re_usuario, UbyTecDb db) =>
{
    if ((db.telefono_rep.Any(x => x.re_usuario == re_usuario) || (db.repartidor.Any(x => x.usuario == re_usuario))) is false) return Results.NotFound();
    var filtroUsuario = db.telefono_rep.Select(x => new { x.telefono, x.re_usuario }).Where(x => x.re_usuario == re_usuario).ToList();
    return Results.Ok(filtroUsuario);
});

telefonosRepItems.MapGet("", async (UbyTecDb db) => await db.telefono_rep.ToListAsync());

telefonosRepItems.MapPut("/{re_usuario}/{telefono:int}", async (string re_usuario, int telefono, TelefonoRep t, UbyTecDb db) =>
{
    if (t.telefono != telefono) return Results.BadRequest();
    var telefonoRep = await db.telefono_rep.FindAsync(telefono, re_usuario);
    if (telefonoRep is null) return Results.NotFound();


    telefonoRep.re_usuario = t.re_usuario;

    await db.SaveChangesAsync();
    return Results.Ok(telefonoRep);

});

// M?todo delete para eliminar un telefono para un repartidor
telefonosRepItems.MapDelete("/{re_usuario}/{telefono:int}", async (string re_usuario, int telefono, UbyTecDb db) =>
{
    var telefonoRep = await db.telefono_rep.FindAsync(telefono, re_usuario);
    if (telefonoRep is null) return Results.NotFound();
    db.telefono_rep.Remove(telefonoRep);
    await db.SaveChangesAsync();
    return Results.NoContent();
});


// ========================================================= M?todos CRUD para Telefono Com =========================================================
var telefonosComItems = app.MapGroup("/Telefonos_Com");
// M?todo post  para crear un telefono para un comercio afiliado
telefonosComItems.MapPost("/", async (TelefonoCom t, UbyTecDb db) =>
{
    db.telefono_com.Add(t);
    await db.SaveChangesAsync();
    return Results.Created($"telefono_com/{t.telefono}", t);
});

telefonosComItems.MapGet("/{co_cedula}/{telefono:int}", async (int co_cedula, int telefono, UbyTecDb db) =>
{
    return await db.telefono_com.FindAsync(telefono, co_cedula) is TelefonoCom t ? Results.Ok(t) : Results.NotFound();
});

// Filtrado por cedula 
telefonosComItems.MapGet("/{co_cedula:int}", async (int co_cedula, UbyTecDb db) =>
{
    if ((db.telefono_com.Any(x => x.co_cedula == co_cedula) || (db.comercio_afiliado.Any(x => x.cedula == co_cedula))) is false) return Results.NotFound();
    var filtroCedula = db.telefono_com.Select(x => new { x.telefono, x.co_cedula }).Where(x => x.co_cedula == co_cedula).ToList();
    return Results.Ok(filtroCedula);
});

telefonosComItems.MapGet("", async (UbyTecDb db) => await db.telefono_com.ToListAsync());

telefonosComItems.MapPut("/{co_cedula}/{telefono:int}", async (int co_cedula, int telefono, TelefonoCom t, UbyTecDb db) =>
{
    if (t.telefono != telefono) return Results.BadRequest();
    var telefonoCom = await db.telefono_com.FindAsync(telefono, co_cedula);
    if (telefonoCom is null) return Results.NotFound();


    //telefonoCom.co_cedula = t.co_cedula;
    telefonoCom.telefono = t.telefono;

    await db.SaveChangesAsync();
    return Results.Ok(telefonoCom);

});
// M?todo delete para eliminar un telefono para un comercio
telefonosComItems.MapDelete("/{co_cedula}/{telefono:int}", async (int co_cedula, int telefono, UbyTecDb db) =>
{
    var telefonoRep = await db.telefono_com.FindAsync(telefono, co_cedula);
    if (telefonoRep is null) return Results.NotFound();
    db.telefono_com.Remove(telefonoRep);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

// ========================================================= M?todos CRUD para Telefono Emp =========================================================
var telefonosEmpItems = app.MapGroup("/Telefonos_Emp");

// M?todo post para crear un telefono para un empleado
telefonosEmpItems.MapPost("/", async (TelefonoEmp t, UbyTecDb db) =>
{
    db.telefono_emp.Add(t);
    await db.SaveChangesAsync();
    return Results.Created($"telefono_emp/{t.telefono}", t);
});

telefonosEmpItems.MapGet("/{e_cedula:int}/{telefono:int}", async (int e_cedula, int telefono, UbyTecDb db) =>
{
    return await db.telefono_emp.FindAsync(telefono, e_cedula) is TelefonoEmp t ? Results.Ok(t) : Results.NotFound();
});

// Filtrado por cedula 
telefonosEmpItems.MapGet("/{e_cedula:int}", async (int e_cedula, UbyTecDb db) =>
{
    if ((db.telefono_emp.Any(x => x.e_cedula == e_cedula) || (db.empleado.Any(x => x.cedula == e_cedula))) is false) return Results.NotFound();
    var filtroCedula = db.telefono_emp.Select(x => new { x.telefono, x.e_cedula }).Where(x => x.e_cedula == e_cedula).ToList();
    return Results.Ok(filtroCedula);
});

telefonosEmpItems.MapGet("", async (UbyTecDb db) => await db.telefono_emp.ToListAsync());


telefonosEmpItems.MapPut("/{e_cedula:int}/{telefono:int}", async (int e_cedula, int telefono, TelefonoEmp t, UbyTecDb db) =>
{
    if (t.telefono != telefono) return Results.BadRequest();
    var telefonoEmp = await db.telefono_emp.FindAsync(telefono, e_cedula);
    if (telefonoEmp is null) return Results.NotFound();

    //telefonoEmp.e_cedula = t.e_cedula;
    telefonoEmp.telefono = t.telefono;

    await db.SaveChangesAsync();
    return Results.Ok(telefonoEmp);

});

// M?todo delete para eliminar un telefono para un empleado
telefonosEmpItems.MapDelete("/{e_cedula:int}/{telefono:int}", async (int e_cedula, int telefono, UbyTecDb db) =>
{
    var telefonoEmp = await db.telefono_emp.FindAsync(telefono, e_cedula);
    if (telefonoEmp is null) return Results.NotFound();
    db.telefono_emp.Remove(telefonoEmp);
    await db.SaveChangesAsync();
    return Results.NoContent();
});





app.Run();




create table empleado(
	cedula int not NULL PRIMARY KEY,
	usuario varchar(20) not NULL,
	password varchar(20) not NULL,
	nombre varchar(20) not NULL,
	provincia varchar(20) not NULL,
	canton varchar(20) not NULL,
	distrito varchar(20) not NULL
);

create table cliente(
	cedula int not NULL PRIMARY KEY,
	usuario varchar(20) not NULL,
	password varchar(20) not NULL,
	nombre varchar(20) not NULL,
	apellido1 varchar(20) not NULL,
	apellido2 varchar(20) not NULL,
	provincia varchar(20) not NULL,
	canton varchar(20) not NULL,
	distrito varchar(20) not NULL,
	telefono int
);


create table administrador_afiliado(
	usuario varchar(20) not NULL PRIMARY KEY,
	correo varchar(40) not NULL,
	password varchar(20) not NULL,
	nombre varchar(20) not NULL,
	provincia varchar(20) not NULL,
	canton varchar(20) not NULL,
	distrito varchar(20) not NULL
);


create table comercio_afiliado(
	cedula int not NULL PRIMARY KEY,
	tipo_comercio varchar(40) not NULL,
	password varchar(20) not NULL,
	nombre_comercio varchar(20) not NULL,
	num_sinpe int not NULL,
	administrador_comercio varchar(20) not NULL,
	correo varchar(40) not NULL,
	provincia varchar(20) not NULL,
	canton varchar(20) not NULL,
	distrito varchar(20) not NULL,
	a_usuario varchar(20) not NULL references administrador_afiliado(usuario)
);

/*Estados: En espera, Aceptado y Rechazado*/
alter table comercio_afiliado
add column estado varchar(50);

alter table comercio_afiliado
alter column estado set not NULL;

select * from comercio_afiliado;

create table producto(
	nombre varchar(20) not NULL PRIMARY KEY,
	co_cedula int not NULL references comercio_afiliado(cedula),
	categoria varchar(20) not NULL,
	precio int not NULL,
	
	/*Hay que buscar cómo poner una foto*/
	foto varchar(50)
);


create table repartidor(
	usuario varchar(20) not NULL PRIMARY KEY,
	correo varchar(40) not NULL,
	password varchar(20) not NULL,
	nombre varchar(20) not NULL,
	provincia varchar(20) not NULL,
	canton varchar(20) not NULL,
	distrito varchar(20) not NULL
);

/* 2 Estados: Disponible y No disponible */
alter table repartidor
add column estado varchar(20);

alter table repartidor
alter column estado set not NULL;

Select * from repartidor;


create table pedido(
	comprobante SERIAL PRIMARY KEY,
	direccion varchar(100) not NULL,
	c_cedula int not NULL references cliente(cedula),
	re_usuario varchar(20) references repartidor(usuario)
);

/* 3 Estados: Preparando, En camino y Finalizado */
alter table pedido
add column estado varchar(20);

alter table pedido
alter column estado set not NULL;

Select * from pedido;


create table telefono_admin(
	telefono int not NULL,
	a_usuario varchar(20) not NULL references administrador_afiliado(usuario),
	PRIMARY KEY(telefono, a_usuario)
);

create table telefono_rep(
	telefono int not NULL,
	re_usuario varchar(20) not NULL references repartidor(usuario),
	PRIMARY KEY(telefono, re_usuario)

);

create table telefono_emp(
	telefono int not NULL,
	e_cedula int not NULL references empleado(cedula),
	PRIMARY KEY(telefono, e_cedula)

);

create table telefono_com(
	telefono int not NULL,
	co_cedula int not NULL references comercio_afiliado(cedula),
	PRIMARY KEY(telefono, co_cedula)

);


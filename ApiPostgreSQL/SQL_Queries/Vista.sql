create or replace view vista_listado_pedidos as
select resultado.co_cedula, resultado.comprobante, resultado.c_cedula, resultado.estado, resultado.provincia, resultado.canton, resultado.distrito, resultado.pr_nombre, resultado.cantidad 
from (pedido join producto_pedido on pedido.comprobante=producto_pedido.pe_comprobante) as resultado
where resultado.estado='Finalizado';

create or replace function get_vista_listado_pedidos(co_cedula_id int)
Returns Table (
	co_cedula int, 
	comprobante int, 
	c_cedula int, 
	estado varchar(20), 
	provincia varchar(20), 
	canton varchar(20), 
	distrito varchar(20), 
	pr_nombre varchar(20), 
	cantidad int)
as
$$
begin

return query

SELECT * FROM vista_listado_pedidos WHERE vista_listado_pedidos.co_cedula=co_cedula_id;

end;
$$
language plpgsql;



select * from get_vista_listado_pedidos (1);


/*
select * 
from pedido;



/*

select * 
from pedido 
where comprobante = (select pe_comprobante from producto_pedido where pe_comprobante = comprobante limit 1) and estado='Finalizado';

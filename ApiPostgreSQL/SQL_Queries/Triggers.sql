/*Trigger que se encarga de verificar si un repartidor está entregando un pedido en el momento en el que se quiera eliminar*/
create or replace function deleteRepartidor() returns Trigger
as 
$$
begin
	if exists (select re_usuario from pedido where re_usuario=old.usuario and estado = 'En camino') then 
	Raise 'No es posible eliminar a este repartidor porque está entregando un pedido';
	
	else
		Delete from telefono_rep where re_usuario=old.usuario;
		Delete from repartidor where usuario=old.usuario;
	end if;
end
$$
Language plpgsql;


create or replace trigger deleteRepartidor before Delete on repartidor for each row execute procedure deleteRepartidor();

/*Trigger que se encarga de poner en espera a todo comercio afiliado nuevo para que el empleado de ubytec lo verifique*/
create or replace function en_espera_comercio_afiliado() returns Trigger
as 
$$
begin
	new.estado='En espera';
	return new;
end
$$
Language plpgsql;

create or replace trigger en_espera_comercio_afiliado before Insert on comercio_afiliado for each row execute procedure en_espera_comercio_afiliado();


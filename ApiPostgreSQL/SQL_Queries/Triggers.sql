
create or replace function deleteRepartidor() returns Trigger
as 
$$
begin
	
	if exists (select re_usuario from pedido where re_usuario=old.usuario and estado = 'En camino') then 
	Raise 'No es posible eliminar a este repartidor porque está entregando un pedido';
	
	else
		Delete from repartidor where usuario=old.usuario;
	end if;
	
	
end
$$
Language plpgsql;



create or replace trigger deleteRepartidor before Delete on repartidor for each row execute procedure deleteRepartidor();



select * from pedido;
select * from repartidor;

/*Delete from repartidor where usuario='Rep05';*/
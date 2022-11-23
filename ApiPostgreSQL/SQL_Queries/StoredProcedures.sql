create or replace procedure recepcion_pedido (comprobante_id int, re_usuario_id varchar(20))
as
$$
	begin
		if not exists(select comprobante from pedido where comprobante = comprobante_id) then Raise Notice 'No existe el comprobante especificado';
		else 
			if not exists(select usuario from repartidor where usuario = re_usuario_id) then Raise Notice 'No existe el repartidor especificado';
			else
				if exists(select re_usuario from pedido where pedido.re_usuario=re_usuario_id) then
					update repartidor set estado='Disponible' where usuario = re_usuario_id;						 
					update pedido set estado='Finalizado' where comprobante=comprobante_id and estado='En camino';

				else
					Raise Notice 'Este usuario no se encuentra asignado al pedido solicitado';
					
				end if;
			end if;
		end if;
	end
$$
language plpgsql;

/*call recepcion_pedido(1, 'Rep08');
call recepcion_pedido(5, 'Rep04');
call recepcion_pedido(4, 'Rep05');*/

select * from pedido;
select * from repartidor;





create or replace procedure set_pedido (comprobante_id int, provincia_ped varchar(20), canton_ped varchar(20), distrito_ped varchar(20))
as
$$
	begin

		if not exists(select comprobante from pedido where comprobante = comprobante_id) then Raise Notice 'No existe el comprobante especificado';
		else
			if (select estado from pedido where comprobante=comprobante_id)='Preparando' then
				if exists (select provincia, canton, distrito from repartidor where provincia = provincia_ped and canton = canton_ped and distrito=distrito_ped and estado = 'Disponible') then
					update pedido set re_usuario = (Select usuario from repartidor where provincia = provincia_ped and canton = canton_ped and distrito=distrito_ped and estado = 'Disponible' limit 1), estado = 'En camino' where comprobante = comprobante_id;																										
				else
					if exists (select provincia, canton from repartidor where provincia = provincia_ped and canton = canton_ped and estado = 'Disponible') then
						update pedido set re_usuario = (Select usuario from repartidor where provincia = provincia_ped and canton = canton_ped and estado = 'Disponible' limit 1), estado = 'En camino' where comprobante = comprobante_id;																										
					else
						if exists (select provincia from repartidor where provincia = provincia_ped  and estado = 'Disponible') then
							update pedido set re_usuario = (Select usuario from repartidor where provincia = provincia_ped  and estado = 'Disponible' limit 1), estado = 'En camino' where comprobante = comprobante_id;																										
						else
							if exists (select usuario from repartidor where  estado = 'Disponible') then
								update pedido set re_usuario = (Select usuario from repartidor where estado = 'Disponible' limit 1), estado = 'En camino' where comprobante = comprobante_id;																										
							else
								Raise 'No hay repartidores disponibles en este momento';
							end if;
						end if;
					end if;
				end if;
			else Raise 'Este pedido ya se encuentra en camino o ha llegado a su destino';
			end if;
			update repartidor set estado = 'No disponible' where exists(select * from pedido where re_usuario = usuario and pedido.estado='En camino');
		end if;
	end
$$
language plpgsql;

 

/*call set_pedido(1, 'Cartago', 'El Guarco', 'Tobosi');
call set_pedido(5, 'Cartago', 'El Guarco', 'Tobosi');
call set_pedido(4, 'Alajuela', 'Desamparados', 'Desamparados');*/

select * from pedido;
select * from repartidor;














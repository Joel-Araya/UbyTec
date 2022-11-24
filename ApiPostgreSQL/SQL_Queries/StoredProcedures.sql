/*Procedimiento almacenado que se encarga de actualizar el pedido y el repartidor cuando este se ha finalizado*/
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


/*Procedimiento que verifica y asigna repartidores disponibles a un pedido de acuerdo a la cercanía de estos*/
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
			update producto_pedido set re_usuario = (select re_usuario from pedido where comprobante = comprobante_id) where producto_pedido.comprobante = comprobante_id;
		end if;
	end
$$
language plpgsql;


/*Procedimiento que permite eliminar administradores afiliado y sus teléfonos guardados*/
create or replace procedure eliminarAdmin (usuario_id varchar(20))
as
$$
	begin
		Delete from telefono_admin where a_usuario = usuario_id;
		Delete from administrador_afiliado where usuario = usuario_id;
	end
$$
language plpgsql;

/*Procedimiento que permite eliminar comercios afiliados y sus teléfonos guardados*/
create or replace procedure eliminarComercio (cedula_id int)
as
$$
	begin
		Delete from telefono_com where co_cedula = cedula_id;
		Delete from comercio_afiliado where cedula = cedula_id;
	end
$$
language plpgsql;

/*Procedimiento que permite eliminar empleados y sus teléfonos guardados*/
create or replace procedure eliminarEmpleado (cedula_id int)
as
$$
	begin
		Delete from telefono_emp where e_cedula = cedula_id;
		Delete from empleado where cedula = cedula_id;
	end
$$
language plpgsql;











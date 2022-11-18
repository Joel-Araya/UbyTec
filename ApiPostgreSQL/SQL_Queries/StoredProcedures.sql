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

/*call recepcion_pedido(1, 'Rep01');*/


select * from pedido;
select * from repartidor;







 







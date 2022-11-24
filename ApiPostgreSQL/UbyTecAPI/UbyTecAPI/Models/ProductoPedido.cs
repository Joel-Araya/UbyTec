using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UbyTecAPI.Models
{
    public class ProductoPedido
    {
        [ForeignKey("producto")] public string? pr_nombre { get; set; }
        [ForeignKey("comercio_afiliado")] public int co_cedula { get; set; }
        [ForeignKey("repartidor")] public string? re_usuario { get; set; }
        [ForeignKey("pedido")] public int comprobante { get; set; }
        public int cantidad { get; set; }

    }
}

using Npgsql;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UbyTecAPI.Models
{
    public class Pedido
    {
        [Key] public int comprobante { get; set; }
        public string? direccion { get; set; }
        public string? estado { get; set; }
        [ForeignKey("cliente")] public int c_cedula { get; set; }
        [ForeignKey("repartidor")] public string? re_usuario { get; set; }
    }
}

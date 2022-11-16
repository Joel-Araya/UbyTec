using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UbyTecAPI.Models
{
    public class Producto
    {
        [Key] public string? nombre { get; set; }
        [ForeignKey("comercio_afiliado")] public int co_cedula { get; set;}
        public string? categoria { get; set; }
        public int precio { get; set;}
        public string? foto { get; set; }
    }
}

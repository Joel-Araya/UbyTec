using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UbyTecAPI.Models
{
    public class TelefonoCom
    {
        [Key] public int telefono { get; set; }
        [ForeignKey("comercio_afiliado")] public int co_cedula { get; set; }
    }
}

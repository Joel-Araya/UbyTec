using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UbyTecAPI.Models
{
    public class TelefonoRep
    {
        [Key] public int telefono { get; set; }
        [ForeignKey("repartidor")] public string? re_usuario { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UbyTecAPI.Models
{
    public class TelefonoAdmin
    {
        [Key] public int telefono { get; set;}
        [ForeignKey("administrador_afiliado")] public string? a_usuario { get; set; }
    }
}

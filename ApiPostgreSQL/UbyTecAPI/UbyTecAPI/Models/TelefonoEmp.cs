using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UbyTecAPI.Models
{
    public class TelefonoEmp
    {
        [Key] public int telefono { get; set; }
        [ForeignKey("empleado")] public int e_cedula { get; set; }
    }
}

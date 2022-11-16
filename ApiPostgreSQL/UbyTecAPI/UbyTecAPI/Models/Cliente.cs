using System.ComponentModel.DataAnnotations;

namespace UbyTecAPI.Models
{
    public class Cliente
    {
        [Key]
        public int cedula { get; set; }
        public string? usuario { get; set; }
        public string? password { get; set; }
        public string? nombre { get; set; }
        public string? apellido1 { get; set; }
        public string apellido2 { get; set; }
        public string? provincia { get; set; }
        public string? canton { get; set; }
        public string? distrito { get; set; }
        public int telefono { get; set; }
    }
}

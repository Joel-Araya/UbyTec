using System.ComponentModel.DataAnnotations;

namespace UbyTecAPI.Models
{
    public class Repartidor
    {
        [Key] public string? usuario { get; set; }
        public string? correo { get; set; }
        public string? password { get; set; }
        public string? nombre { get; set; }
        public string? provincia { get; set; }
        public string? canton { get; set; }
        public string? distrito { get; set; }
        public string? estado { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UbyTecAPI.Models
{
    public class ComercioAfiliado
    {
        [Key]
        public int cedula { get; set; }
        public string? tipo_comercio { get; set; }
        public string? nombre_comercio { get; set; }
        public int num_sinpe { get; set; }
        public string? administrador_comercio { get; set; }
        public string? correo { get; set; }
        public string? provincia { get; set; }
        public string? canton { get; set; }
        public string? distrito { get; set; }
        [ForeignKey("administrador_afiliado")] public string? a_usuario { get; set; }
        public string? estado { get; set; }
    }
}

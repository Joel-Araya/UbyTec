namespace UbyTecAPI.Models
{
    public class VistaListadoPedidos
    {
        public int co_cedula { get; set; }
        public int comprobante { get; set; }
        public int c_cedula{ get; set; } 
        public string? estado{ get; set; } 
        public string? provincia{ get; set; } 
        public string? canton{ get; set; } 
        public string? distrito{ get; set; } 
        public string? pr_nombre{ get; set; } 
        public int cantidad { get; set; }
    }
}

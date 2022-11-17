using System.Net.Mail;
using System.Net;
using System.Net.Mime;



namespace UbyTecAPI
{
    public class EmailPasswordManager
    {
        public EmailPasswordManager() { }

        public void EmailSend(string emailToSend, string newPassword) 
        {
            var password = Environment.GetEnvironmentVariable("gmail", EnvironmentVariableTarget.User);
            try
            {
                var cliente = new SmtpClient("smtp.gmail.com", 587)
                {
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential("ubytec2022@gmail.com", "wvclrjuaeuzgnuim")
                };

                var email = new MailMessage("ubytec2022@gmail.com", emailToSend);
                email.Subject = "Contraseña UbyTec";
                email.Body= $"Le enviamos su contraseña desde UbyTec {newPassword}";
                email.IsBodyHtml= false;
                cliente.Send(email);

                /*Attachment adjunto = new Attachment("EmailPasswordManager.cs", MediaTypeNames.Application.Rtf);
                email.Attachments.Add(adjunto);
                cliente.Send(email);*/

            }
            catch (Exception ex) 
            {
                System.Console.WriteLine(ex.Message);
            }
        }



        public string GeneratePassword() 
        {
            Random rdn = new Random();
            string caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890%$#@";
            int longitud = caracteres.Length;
            char letra;
            int longitudContrasenia = 10;
            string contraseniaAleatoria = string.Empty;
            for (int i = 0; i < longitudContrasenia; i++)
            {
                letra = caracteres[rdn.Next(longitud)];
                contraseniaAleatoria += letra.ToString();
            }
            //La contraseña es: r%CAdeZ07l
            return contraseniaAleatoria;
        }
    }
}

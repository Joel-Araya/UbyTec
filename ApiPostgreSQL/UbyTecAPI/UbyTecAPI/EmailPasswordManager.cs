using System.Net.Mail;
using System.Net;
using System.Net.Mime;
using System;
using System.Globalization;
using System.Text.RegularExpressions;


namespace UbyTecAPI
{
    
    public class EmailPasswordManager
    {
        /// <summary>
        /// Contructor de la clase
        /// </summary>
        public EmailPasswordManager() { }

        /// <summary>
        /// Función que se encarga de enviar un email con la contraseña generada por UbyTec
        /// </summary>
        /// <param name="emailToSend"></param>
        /// <param name="newPassword"></param>
        /// <exception cref="ArgumentException"></exception>
        public void EmailSend(string emailToSend, string newPassword) 
        {
            if (IsValidEmail(emailToSend) is false) throw new ArgumentException("No se ha ingresado una dirección de email válida") ;

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

            }
            catch (Exception ex) 
            {
                System.Console.WriteLine(ex.Message);
            }
        }


        /// <summary>
        /// Genera una contraseña aleatoria
        /// </summary>
        /// <returns> contraseniaAleatoria</returns>
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
            return contraseniaAleatoria;
        }

        /// <summary>
        /// Valida que el email ingresado cumpla con la estructura que debe llevar un correo electrónico
        /// 
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public static bool IsValidEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email)) return false;

            try
            {
                email = Regex.Replace(email, @"(@)(.+)$", DomainMapper, RegexOptions.None, TimeSpan.FromMilliseconds(200));
                string DomainMapper(Match match)
                {
                    var idn = new IdnMapping();
                    string domainName = idn.GetAscii(match.Groups[2].Value);
                    return match.Groups[1].Value + domainName;
                }
            }
            catch (RegexMatchTimeoutException e)
            {
                return false;
            }
            catch (ArgumentException e)
            {
                return false;
            }
            try
            {
                return Regex.IsMatch(email, @"^[^@\s]+@[^@\s]+\.[^@\s]+$", RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(250));
            }
            catch (RegexMatchTimeoutException)
            {
                return false;
            }
        }
    }
}

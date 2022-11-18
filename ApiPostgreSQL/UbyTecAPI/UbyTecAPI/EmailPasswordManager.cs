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
        public EmailPasswordManager() { }

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

        public static bool IsValidEmail(string email)
        {
            if (string.IsNullOrWhiteSpace(email)) return false;

            try
            {
                // Normalize the domain
                email = Regex.Replace(email, @"(@)(.+)$", DomainMapper, RegexOptions.None, TimeSpan.FromMilliseconds(200));

                // Examines the domain part of the email and normalizes it.
                string DomainMapper(Match match)
                {
                    // Use IdnMapping class to convert Unicode domain names.
                    var idn = new IdnMapping();

                    // Pull out and process domain name (throws ArgumentException on invalid)
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

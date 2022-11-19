namespace MongoDB_API.Models
{using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

    public class Cart
    {
         [BsonId]
        public ObjectId Id { get; set; }
        public int IdP { get; set;}
        public string Name { get; set; }
        public string Image { get; set; }
        public string Cantidad { get; set; }
        public string Precio { get; set; }
     

    }
}

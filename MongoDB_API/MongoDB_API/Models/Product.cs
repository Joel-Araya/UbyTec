using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MongoDB_API.Models
{
    public class Product
    {
        [BsonId] 
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

        public DateTime ExpiryDate { get; set; }

        public string Category { get; set; }


    }
}

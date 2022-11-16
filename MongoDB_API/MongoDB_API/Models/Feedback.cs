using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MongoDB_API.Models
{
    public class Feedback
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string Name { get; set; }
    

        public string F_Purchase { get; set; }
        public string F_Afil { get; set; }
        public string F_Delivery { get; set; }




    }
}

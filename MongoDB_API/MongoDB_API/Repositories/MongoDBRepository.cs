//CONEXION CON MONGO
using MongoDB.Driver;

namespace MongoDB_API.Repositories
{
    public class MongoDBRepository
    {
        public MongoClient client; // Nexo entre aplicacion y base de datos Mong

        public IMongoDatabase db;

        public MongoDBRepository ()
        {
            client = new MongoClient ("mongodb://127.0.0.1:27017");

            db = client.GetDatabase("Inventory");
        }
    }

    public class Feedback_Rep
    {
        public MongoClient client; // Nexo entre aplicacion y base de datos Mong

        public IMongoDatabase db;

        public Feedback_Rep()
        {
            client = new MongoClient("mongodb://127.0.0.1:27017");

            db = client.GetDatabase("Feedback");
        }

    }


}

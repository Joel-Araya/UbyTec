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
            client = new MongoClient ("mongodb://mongopf:BBGTxtTDj8ayggiUVwX8uU8nudIQm0tZUeYazbMQr6L68hg8MJk7btf50ahR0V1tQ3EDfW2NZC0lACDbyc02Yw==@mongopf.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongopf@");

            db = client.GetDatabase("Inventory");
        }
    }

    public class Feedback_Rep
    {
        public MongoClient client; // Nexo entre aplicacion y base de datos Mong

        public IMongoDatabase db;

        public Feedback_Rep()
        {
            client = new MongoClient("mongodb://mongopf:BBGTxtTDj8ayggiUVwX8uU8nudIQm0tZUeYazbMQr6L68hg8MJk7btf50ahR0V1tQ3EDfW2NZC0lACDbyc02Yw==@mongopf.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mongopf@");

            db = client.GetDatabase("Inventory");
        }

    }


}

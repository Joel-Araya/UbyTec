using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB_API.Models;

namespace MongoDB_API.Repositories
{
    public class FeedbackCollection : IFeedbackCollection
    {

        internal Feedback_Rep _repository = new Feedback_Rep();
        private IMongoCollection<Feedback> Collection;

        public FeedbackCollection() 
        {
            Collection = _repository.db.GetCollection<Feedback>("Feedbacks");
        }
        public async Task DeleteFeedback(string id)
        {
            var filter = Builders<Feedback>.Filter.Eq(s => s.Id, id);
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Feedback>> GetAllFeedback()
        {
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<Feedback> GetFeedbackById(string id)
        {
            return await Collection.FindAsync(
                new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertFeedback(Feedback feedback)
        {
            await Collection.InsertOneAsync(feedback);
        }

        public async Task UpdateFeedback(Feedback feedback)
        {
            var filter = Builders<Feedback>
                .Filter
                .Eq(s => s.Id, feedback.Id);
            await Collection.ReplaceOneAsync(filter, feedback);


        }

        

    }
}

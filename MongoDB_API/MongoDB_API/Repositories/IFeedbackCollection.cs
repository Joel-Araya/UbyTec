using MongoDB_API.Models;

namespace MongoDB_API.Repositories
{
    public interface IFeedbackCollection
    {

        Task InsertFeedback(Feedback feedback);
        Task UpdateFeedback(Feedback feedback);

        Task DeleteFeedback(string id);

        Task<List<Feedback>> GetAllFeedback();
        Task<Feedback> GetFeedbackById(string id);

    }

}

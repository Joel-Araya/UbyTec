using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB_API.Models;
using MongoDB_API.Repositories;

namespace MongoDB_API.Controllers
{

    [Route("api/[controller]")]
    public class FeedbackController : Controller
    {

        private IFeedbackCollection db = new FeedbackCollection();
        [HttpGet]
        public async Task<IActionResult> GetAllFeedback()
        {
            return Ok(await db.GetAllFeedback());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetFeedbackDetails(string id)
        {
            return Ok(await db.GetFeedbackById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateFeedback([FromBody] Feedback feedback)
        {
            if (feedback == null)
                return BadRequest();
            if (feedback.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "The product shouldn't be empty");

            }
            await db.InsertFeedback(feedback);
            return Created("Created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct([FromBody] Feedback feedback, string id)
        {
            if (feedback == null)
                return BadRequest();
            if (feedback.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "The product shouldn't be empty");

            }
            feedback.Id = new MongoDB.Bson.ObjectId(id);
            await db.UpdateFeedback(feedback);
            return Created("Created", true);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteFeedback(string id)
        {
            await db.DeleteFeedback(id);

            return NoContent(); // Salio todo bien 

        }

    }
}

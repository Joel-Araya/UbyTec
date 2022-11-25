using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB_API.Models;
using MongoDB_API.Repositories;

namespace MongoDB_API.Controllers
                            
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private IProductCollection db = new ProductCollection();
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            return Ok(await db.GetAllProducts());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductDetails(string id)
            {
            return Ok(await db.GetProductById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] Product product)
        {
            if (product == null)
                return BadRequest();
            if (product.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "The product shouldn't be empty");

            }
            await db.InsertProduct(product);
            return Created("Created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct([FromBody] Product product, string id)
        {
            if (product == null)
                return BadRequest();
            if (product.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "The product shouldn't be empty");

            }
            product.Id = id;
            await db.UpdateProduct(product);
            return Created("Created", true);
        }
       

 

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProduct (string id)
        {
            await db.DeleteProduct(id);

            return NoContent(); // Salio todo bien 

        }

    }
}

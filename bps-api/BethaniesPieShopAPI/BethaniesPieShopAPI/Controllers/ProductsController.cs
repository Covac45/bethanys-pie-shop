using BethaniesPieShopAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace BethaniesPieShopAPI.Controllers
{
  [Route("api/products")]
  [ApiController]
  public class ProductsController : ControllerBase
  {
    [HttpGet]
    public ActionResult<IEnumerable<ProductDto>> GetProducts()
    {
      return Ok(ProductsDataStore.current.products);
    }

    [HttpGet("{id}")]
    public ActionResult<ProductDto> GetProduct(int id)
    {
      var productToReturn = ProductsDataStore.current.products.FirstOrDefault(p => p.id == id);

      if (productToReturn == null)
      {
        return NotFound();
      }

      return Ok(productToReturn);
    }

  }
}

using System.Diagnostics;
using System.IO.Pipelines;
using System.Xml.Linq;

namespace BethaniesPieShopAPI.Models
{
  public class ProductsDataStore
  {
    public List<ProductDto> products { get; set; }
    public static ProductsDataStore current { get; set; } = new ProductsDataStore();


    public ProductsDataStore()
    {
      products = new List<ProductDto>()
      {
        new ProductDto
        {
          id = 1,
          name = "Apple Pie",
          tagline = "Our famous, number-one selling pie",
          abpTagline = "Increase Your Apple Pie Intake",
          cardTagline = "Our famous apple pie!",
          description = "Indulge in the timeless delight of our Classic Apple Pie, a perfect balance of sweet and tart flavors encased in a golden, flaky crust. Each slice is brimming with tender, hand-picked apples coated in a luscious cinnamon-spiced filling, creating a warm and comforting taste in every bite. The buttery pastry, expertly baked to a crisp perfection, melts in your mouth while providing just the right amount of crunch. Perfect as a treat on its own or paired with a dollop of whipped cream or a scoop of vanilla ice cream, this pie is a celebration of tradition and exceptional flavor.",
          ingredients = ["Apple", "Sugar", "Eggs", "Milk"],
          ingredientsRisk = ["Yes", "Yes", "Yes", "Mabye"],
          ingredientsQty = ["50%", "1%", "10%", "<0.1%"],
          imageName = "/products/applepie.png",
          smallImageName = "/products/applepiesmall.png",
          category = "Fruit pie",
          price = 14.95,
          discount = 0.2,
        },
        new ProductDto
        {
          id = 2,
          name = "Blueberry cheesecake",
          tagline = "Smooth, sweet, and bursting with flavour",
          abpTagline = "A piece of blueberry bliss",
          cardTagline = "You'll love it!",
          description = "Delight in the creamy, decadent flavors of our Blueberry Cheesecake, a perfect blend of rich, velvety cream cheese and the sweet-tart brightness of fresh blueberries. The smooth filling is complemented by a luscious layer of blueberry compote, creating a delightful contrast of textures and flavors. Resting on a buttery, golden graham cracker crust, this cheesecake offers an unforgettable taste of indulgence. Whether served as a centerpiece for a special occasion or as a simple treat, it’s a dessert that never fails to impress.",
          ingredients = ["Blueberry", "Cream cheese", "Sugar", "Eggs", "Milk"],
          ingredientsRisk = ["Yes", "Yes", "Yes", "Yes", "Mabye"],
          ingredientsQty = ["30%", "30%", "1%", "10%", "<0.1%"],
          imageName = "/assets/images/products/applepie.png",
          smallImageName = "/assets/images/products/applepiesmall.png",
          category = "Fruit pie",
          price = 14.95,
          discount = 0.2,
        }
      };
    }

  }
}

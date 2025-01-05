namespace BethaniesPieShopAPI.Models
{
  public class ProductDto
  {
    public int id { get; set; }
    public string name { get; set; }
    public string tagline { get; set; }
    public string abpTagline { get; set; }
    public string cardTagline { get; set; }
    public string description { get; set; }
    public List<string> ingredients { get; set; }
    public List<string> ingredientsRisk { get; set; }
    public List<string> ingredientsQty { get; set; }
    public string imageName { get; set; }
    public string smallImageName { get; set; }
    public string category { get; set; }
    public double price { get; set; }
    public double discount { get; set; }

  }
}

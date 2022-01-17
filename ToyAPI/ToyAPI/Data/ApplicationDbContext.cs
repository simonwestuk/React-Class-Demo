using Microsoft.EntityFrameworkCore;
using ToyAPI.Models;

namespace ToyAPI.Data
{
    //set up database class
    public class ApplicationDbContext : DbContext
    {
        public DbSet<ProductModel> Products { get; set; }
        //constructor that allows us to use the database
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}

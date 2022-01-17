using Microsoft.EntityFrameworkCore;
using ToyAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

//add swagger service
builder.Services.AddSwaggerGen();


//add in DB connection for a local SQLite file
builder.Services.AddDbContext<ApplicationDbContext>(
    options => options.UseSqlite("Data Source= ./Data/ToyDB.db")
 );

var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseHttpsRedirection();

app.UseAuthorization();

//Allow cors - i.e. access api from any request source
app.UseCors(x=>
    x.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());


app.MapControllers();

app.Run();

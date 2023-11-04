using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer.Server;
using System.Text.Json.Serialization;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;
using vietqtran.DataAccess.Data;
using vietqtran.DataLayer.Repositories;
using vietqtran.Services.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//! Connect to Database
builder.Services.AddDbContext<DataContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//! Add Auto Mapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

//! Add Repositories Injection
builder.Services.AddTransient<AppUserRepository>();
builder.Services.AddScoped<IAppUserRepository, AppUserRepository>();

//! Add Services Injection
builder.Services.AddTransient<AppUserService>();
builder.Services.AddScoped<IAppUserService, AppUserService>();

//! Cors setup
builder.Services.AddCors(options => {
    options.AddPolicy("MyCors", builder => {
        builder
            .AllowAnyHeader()
            .AllowAnyMethod()
            .SetIsOriginAllowed(_ => true); // Allow all origin can call API
    });
});

var app = builder.Build();

//! Active Cors
app.UseCors("MyCors");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

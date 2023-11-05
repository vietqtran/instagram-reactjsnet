using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Microsoft.SqlServer.Server;
using System.Configuration;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json.Serialization;
using vietqtran.Core.Interfaces.IRepository;
using vietqtran.Core.Interfaces.IService;
using vietqtran.Core.Utilities;
using vietqtran.DataAccess.Data;
using vietqtran.DataLayer.Repositories;
using vietqtran.Models.User;
using vietqtran.Services.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

//! Swagger
builder.Services.AddSwaggerGen(options => {
	options.SwaggerDoc("v1", new OpenApiInfo { Title = "Swagger Instagram", Version = "v1.0.0" });
	options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
	{
		Description = "",
		Name = "Authorization",
		In = ParameterLocation.Header,
		Type = SecuritySchemeType.ApiKey,
		Scheme = "Bearer"
	});
	options.AddSecurityRequirement(new OpenApiSecurityRequirement()
    {
	   {
		  new OpenApiSecurityScheme
		  {
			 Reference = new OpenApiReference
			 {
				Type = ReferenceType.SecurityScheme,
				Id = "Bearer"
			 },
			 Scheme = "oauth2",
			 Name = "Bearer",
			 In = ParameterLocation.Header,
		  },
		  new List<string>()
	   }
    });
});

//! JWT Authentication
builder.Services.Configure<JwtConfig>(builder.Configuration.GetSection("JWT"));
builder.Services.AddIdentity<AppUser, AppUserRole>()
    .AddEntityFrameworkStores<DataContext>()
    .AddDefaultTokenProviders();
builder.Services.AddAuthentication(options => {
	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options => {
	options.SaveToken = true;
	options.RequireHttpsMetadata = false;
	options.TokenValidationParameters = new TokenValidationParameters
	{
		ValidateIssuer = true,
		ValidateAudience = true,
		ValidateLifetime = true,
		ValidateIssuerSigningKey = true,
		ValidAudience = builder.Configuration["JWT:Audience"],
		ValidIssuer = builder.Configuration["JWT:Issuer"],
		IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:SecretKey"])),
	};
});

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
	options.AddPolicy("AllowAllOriginPolicy", builder => {
		builder
		    .AllowAnyHeader()
		    .AllowAnyMethod()
		    .SetIsOriginAllowed(_ => true); // Allow all origin can call API
	});
});

var app = builder.Build();

//! Active Cors
app.UseCors("AllowAllOriginPolicy");

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

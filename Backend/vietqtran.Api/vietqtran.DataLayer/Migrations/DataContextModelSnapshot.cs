﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using vietqtran.DataAccess.Data;

#nullable disable

namespace vietqtran.DataLayer.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<System.Guid>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.ToTable("RoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<System.Guid>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.ToTable("UserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<System.Guid>", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("UserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<System.Guid>", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("UserId", "RoleId");

                    b.ToTable("UserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<System.Guid>", b =>
                {
                    b.Property<Guid>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("UserTokens", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Models.AccessToken", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("ExpiryDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Token")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("AccessTokens");
                });

            modelBuilder.Entity("vietqtran.Models.Models.RefreshToken", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Token")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("RefreshTokens");
                });

            modelBuilder.Entity("vietqtran.Models.User.AppUser", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Dob")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("AppUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = new Guid("2594da8a-e88f-4915-a901-9ce940e8c1ce"),
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "4ba3978b-4269-4250-a092-5988fbf28a82",
                            Dob = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "ngothilinhchi@gmail.com",
                            EmailConfirmed = true,
                            LockoutEnabled = false,
                            Name = "Ngô Thị Linh Chi",
                            NormalizedEmail = "ngothilinhchi@gmail.com",
                            Password = "linhchi",
                            PhoneNumberConfirmed = false,
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = new Guid("914c9fc5-f5a1-477c-beb7-a3da67056ae8"),
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "c45b0c1b-a227-45e0-9164-9956062bf32e",
                            Dob = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "tranquocviet1303@gmail.com",
                            EmailConfirmed = true,
                            LockoutEnabled = false,
                            Name = "Trần Quốc Việt",
                            NormalizedEmail = "tranquocviet1303@gmail.com",
                            Password = "admin",
                            PhoneNumberConfirmed = false,
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = new Guid("b7144f23-fa5e-4e82-99c4-6562626bac2c"),
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "b49ef1fc-57db-40cc-aa2e-f1575710e2f9",
                            Dob = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "tranthuylinh@gmail.com",
                            EmailConfirmed = true,
                            LockoutEnabled = false,
                            Name = "Trần Thùy Linh",
                            NormalizedEmail = "tranthuylinh@gmail.com",
                            Password = "thuylinh",
                            PhoneNumberConfirmed = false,
                            TwoFactorEnabled = false
                        });
                });

            modelBuilder.Entity("vietqtran.Models.User.AppUserRole", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("AppUserRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = new Guid("6b5f1083-24f1-4887-abb7-ede43054b68e"),
                            ConcurrencyStamp = "2da3fd54-d1fa-48d0-b7b3-bf7d09bb21b4",
                            Name = "Admin"
                        },
                        new
                        {
                            Id = new Guid("83867a81-8f4e-4a39-a225-d4fcadb07e59"),
                            ConcurrencyStamp = "f6c6c1d5-4676-4565-b31e-b6b476ef898d",
                            Name = "User"
                        },
                        new
                        {
                            Id = new Guid("ef26d1f6-60cb-4036-b37a-58aae52773bc"),
                            ConcurrencyStamp = "bbe4530c-d04c-4abb-b0ce-2e4bca46cdf8",
                            Name = "Manager"
                        });
                });

            modelBuilder.Entity("vietqtran.Models.Models.AccessToken", b =>
                {
                    b.HasOne("vietqtran.Models.User.AppUser", "User")
                        .WithOne("AccessTokens")
                        .HasForeignKey("vietqtran.Models.Models.AccessToken", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("vietqtran.Models.Models.RefreshToken", b =>
                {
                    b.HasOne("vietqtran.Models.User.AppUser", "User")
                        .WithOne("RefreshTokens")
                        .HasForeignKey("vietqtran.Models.Models.RefreshToken", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("vietqtran.Models.User.AppUser", b =>
                {
                    b.Navigation("AccessTokens")
                        .IsRequired();

                    b.Navigation("RefreshTokens")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

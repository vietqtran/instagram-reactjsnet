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

                    b.ToTable("User_Claims", (string)null);
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

                    b.ToTable("User_Logins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<System.Guid>", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("UserId", "RoleId");

                    b.ToTable("User_Roles", (string)null);
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

                    b.ToTable("User_Tokens", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Entities.AccessToken", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("ExpiryDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Token")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("Token")
                        .HasDatabaseName("Index_AccessToken_Token");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Access_Tokens", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Entities.MessageModels.Message", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("Emoji")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FileUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<bool>("IsReply")
                        .HasColumnType("bit");

                    b.Property<int>("MessageType")
                        .HasColumnType("int");

                    b.Property<Guid>("PostId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ReplyId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("Sender")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<Guid>("StoryId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("Content")
                        .IsUnique()
                        .HasDatabaseName("Index_Message_Content");

                    b.HasIndex("CreatedAt")
                        .IsUnique()
                        .HasDatabaseName("Index_Message_CreatedAt");

                    b.HasIndex("Id")
                        .IsUnique()
                        .HasDatabaseName("Index_Message_Id");

                    b.HasIndex("ReplyId")
                        .IsUnique()
                        .HasDatabaseName("Index_Message_ReplyId");

                    b.HasIndex("Sender")
                        .IsUnique()
                        .HasDatabaseName("Index_Message_Sender");

                    b.HasIndex("StoryId")
                        .IsUnique()
                        .HasDatabaseName("Index_Message_StoryId");

                    b.HasIndex("UserId");

                    b.ToTable("Messages", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Entities.PersonalLink", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Link")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id", "UserId", "Link");

                    b.HasIndex("Id")
                        .HasDatabaseName("Index_PersonalLink_Id");

                    b.HasIndex("UserId")
                        .HasDatabaseName("Index_PersonalLink_UserId");

                    b.ToTable("Personal_Links", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Entities.RefreshToken", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("ExpiryDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Token")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("Token")
                        .HasDatabaseName("Index_RefreshToken_Token");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Refresh_Tokens", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Entities.Relations.ReactMessage", b =>
                {
                    b.Property<Guid>("UserId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("MessageId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("Id")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("React")
                        .HasColumnType("int");

                    b.HasKey("UserId", "MessageId", "Id");

                    b.HasIndex("MessageId", "UserId")
                        .HasDatabaseName("Index_ReactMessage_MessageId_UserId");

                    b.ToTable("Reacts_Message", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Entities.Role", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("NormalizedName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique()
                        .HasDatabaseName("Index_Role_Name")
                        .HasFilter("[Name] IS NOT NULL");

                    b.ToTable("Roles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = new Guid("bd810d0f-7a36-463c-b2da-e81d8e8d19c0"),
                            ConcurrencyStamp = "7556f4fc-63cb-416a-9703-4113989b0b65",
                            Description = "Role for ADMIN",
                            Name = "Admin",
                            NormalizedName = "ADMIN"
                        },
                        new
                        {
                            Id = new Guid("cdb08037-8686-4802-929f-8a05e7f12219"),
                            ConcurrencyStamp = "8a16a873-37da-423f-bf18-43e9a7414e0a",
                            Description = "Role for USER",
                            Name = "User",
                            NormalizedName = "USER"
                        });
                });

            modelBuilder.Entity("vietqtran.Models.Entities.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("Avatar")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Bio")
                        .HasMaxLength(150)
                        .HasColumnType("nvarchar(150)");

                    b.Property<DateTime>("BirthDay")
                        .HasColumnType("datetime2");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedAt")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("datetime2")
                        .HasDefaultValue(new DateTime(2023, 11, 8, 4, 23, 58, 744, DateTimeKind.Utc).AddTicks(8522));

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("Gender")
                        .HasColumnType("bit");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsPrivateAccount")
                        .HasColumnType("bit");

                    b.Property<DateTime>("LastOfflineTime")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("LastOnlineTime")
                        .HasColumnType("datetime2");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<Guid>("RoleId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("CreatedAt")
                        .HasDatabaseName("Index_User_CreatedAt");

                    b.HasIndex("Email")
                        .IsUnique()
                        .HasDatabaseName("Index_User_Email")
                        .HasFilter("[Email] IS NOT NULL");

                    b.HasIndex("IsActive")
                        .HasDatabaseName("Index_User_IsActive");

                    b.HasIndex("PhoneNumber")
                        .IsUnique()
                        .HasDatabaseName("Index_User_PhoneNumber")
                        .HasFilter("[PhoneNumber] IS NOT NULL");

                    b.HasIndex("RoleId")
                        .HasDatabaseName("Index_User_RoleId");

                    b.HasIndex("UserName")
                        .IsUnique()
                        .HasDatabaseName("Index_User_UserName");

                    b.ToTable("Users", (string)null);
                });

            modelBuilder.Entity("vietqtran.Models.Entities.AccessToken", b =>
                {
                    b.HasOne("vietqtran.Models.Entities.User", "User")
                        .WithOne("AccessToken")
                        .HasForeignKey("vietqtran.Models.Entities.AccessToken", "UserId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.MessageModels.Message", b =>
                {
                    b.HasOne("vietqtran.Models.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("Sender")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("vietqtran.Models.Entities.User", null)
                        .WithMany("Messages")
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.PersonalLink", b =>
                {
                    b.HasOne("vietqtran.Models.Entities.User", "User")
                        .WithMany("PersonalLinks")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.RefreshToken", b =>
                {
                    b.HasOne("vietqtran.Models.Entities.User", "User")
                        .WithOne("RefreshToken")
                        .HasForeignKey("vietqtran.Models.Entities.RefreshToken", "UserId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.Relations.ReactMessage", b =>
                {
                    b.HasOne("vietqtran.Models.Entities.MessageModels.Message", "Message")
                        .WithMany("MessageReacts")
                        .HasForeignKey("MessageId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.HasOne("vietqtran.Models.Entities.User", "User")
                        .WithMany("MessageReacts")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("Message");

                    b.Navigation("User");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.User", b =>
                {
                    b.HasOne("vietqtran.Models.Entities.Role", "UserRole")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.NoAction)
                        .IsRequired();

                    b.Navigation("UserRole");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.MessageModels.Message", b =>
                {
                    b.Navigation("MessageReacts");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("vietqtran.Models.Entities.User", b =>
                {
                    b.Navigation("AccessToken")
                        .IsRequired();

                    b.Navigation("MessageReacts");

                    b.Navigation("Messages");

                    b.Navigation("PersonalLinks");

                    b.Navigation("RefreshToken")
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

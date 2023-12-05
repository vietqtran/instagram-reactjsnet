using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace vietqtran.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class updateidlikepost2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Likes_Post",
                table: "Likes_Post");

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("7ad42936-58ae-4e1c-9f50-b6ef0ef0c107"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("ba31fd20-781d-4174-a0ac-6c11f2eaf325"));

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Likes_Post");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 12, 5, 7, 26, 26, 437, DateTimeKind.Utc).AddTicks(8291),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 12, 5, 7, 22, 58, 867, DateTimeKind.Utc).AddTicks(7707));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Likes_Post",
                table: "Likes_Post",
                columns: new[] { "PostId", "UserId" });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("66f1451c-7248-4640-a5bf-73527ffd4ff4"), "5d21f83b-c016-4e1e-b575-b6f56f605259", "Role for ADMIN", "Admin", "ADMIN" },
                    { new Guid("aa6fd179-2eb3-430f-b6c1-4e1e51ef9b09"), "e0fc6c2f-b776-4cce-be04-db2797fd30b0", "Role for USER", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Likes_Post",
                table: "Likes_Post");

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("66f1451c-7248-4640-a5bf-73527ffd4ff4"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("aa6fd179-2eb3-430f-b6c1-4e1e51ef9b09"));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 12, 5, 7, 22, 58, 867, DateTimeKind.Utc).AddTicks(7707),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 12, 5, 7, 26, 26, 437, DateTimeKind.Utc).AddTicks(8291));

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Likes_Post",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Likes_Post",
                table: "Likes_Post",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("7ad42936-58ae-4e1c-9f50-b6ef0ef0c107"), "30c151f3-7a9b-4bc4-ad7d-f04ed8e3819e", "Role for USER", "User", "USER" },
                    { new Guid("ba31fd20-781d-4174-a0ac-6c11f2eaf325"), "51647809-9262-4f04-bf9b-8e7bcbb5d0e9", "Role for ADMIN", "Admin", "ADMIN" }
                });
        }
    }
}

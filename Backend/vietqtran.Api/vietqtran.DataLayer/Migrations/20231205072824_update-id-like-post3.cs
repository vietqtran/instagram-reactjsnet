using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace vietqtran.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class updateidlikepost3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                defaultValue: new DateTime(2023, 12, 5, 7, 28, 24, 145, DateTimeKind.Utc).AddTicks(1531),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 12, 5, 7, 26, 26, 437, DateTimeKind.Utc).AddTicks(8291));

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("8f5e58ab-f6c8-4a9d-83e1-703cd631920f"), "f88d0b5d-e0ff-4106-9f09-221355dade9c", "Role for ADMIN", "Admin", "ADMIN" },
                    { new Guid("ed57c7d9-b7d2-43de-af70-021eb94de0d1"), "b02c5d4d-ea08-4de1-8fc6-ef3c24a0e4b0", "Role for USER", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f5e58ab-f6c8-4a9d-83e1-703cd631920f"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("ed57c7d9-b7d2-43de-af70-021eb94de0d1"));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 12, 5, 7, 26, 26, 437, DateTimeKind.Utc).AddTicks(8291),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 12, 5, 7, 28, 24, 145, DateTimeKind.Utc).AddTicks(1531));

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("66f1451c-7248-4640-a5bf-73527ffd4ff4"), "5d21f83b-c016-4e1e-b575-b6f56f605259", "Role for ADMIN", "Admin", "ADMIN" },
                    { new Guid("aa6fd179-2eb3-430f-b6c1-4e1e51ef9b09"), "e0fc6c2f-b776-4cce-be04-db2797fd30b0", "Role for USER", "User", "USER" }
                });
        }
    }
}

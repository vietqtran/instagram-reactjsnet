using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace vietqtran.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class fixlikecommentkey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("b9a0ff5c-b03d-4cc5-8956-bcc6b6a7adf7"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("ee04466f-a82f-478f-b429-edd435408820"));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 12, 4, 11, 58, 52, 793, DateTimeKind.Utc).AddTicks(1762),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 11, 29, 7, 3, 33, 161, DateTimeKind.Utc).AddTicks(8579));

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("2991229c-8f5c-4bf3-9efd-92bb5dd5e40a"), "45e7333e-ce96-48b9-9fff-f55c2767f2d2", "Role for USER", "User", "USER" },
                    { new Guid("8dc52e3a-3149-4aa8-8e93-d46e9cbe635a"), "af710341-af78-483b-bfe7-29d91e5fd545", "Role for ADMIN", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("2991229c-8f5c-4bf3-9efd-92bb5dd5e40a"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8dc52e3a-3149-4aa8-8e93-d46e9cbe635a"));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 11, 29, 7, 3, 33, 161, DateTimeKind.Utc).AddTicks(8579),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 12, 4, 11, 58, 52, 793, DateTimeKind.Utc).AddTicks(1762));

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("b9a0ff5c-b03d-4cc5-8956-bcc6b6a7adf7"), "8c5b3db6-ad5b-42ab-a958-6eef27b74a90", "Role for USER", "User", "USER" },
                    { new Guid("ee04466f-a82f-478f-b429-edd435408820"), "02b11441-0c50-4173-9949-240ca32a81e0", "Role for ADMIN", "Admin", "ADMIN" }
                });
        }
    }
}

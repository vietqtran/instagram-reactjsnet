using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace vietqtran.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class updateidlikepost : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                defaultValue: new DateTime(2023, 12, 5, 7, 22, 58, 867, DateTimeKind.Utc).AddTicks(7707),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 12, 4, 11, 58, 52, 793, DateTimeKind.Utc).AddTicks(1762));

            migrationBuilder.AlterColumn<Guid>(
                name: "Id",
                table: "Likes_Post",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("7ad42936-58ae-4e1c-9f50-b6ef0ef0c107"), "30c151f3-7a9b-4bc4-ad7d-f04ed8e3819e", "Role for USER", "User", "USER" },
                    { new Guid("ba31fd20-781d-4174-a0ac-6c11f2eaf325"), "51647809-9262-4f04-bf9b-8e7bcbb5d0e9", "Role for ADMIN", "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("7ad42936-58ae-4e1c-9f50-b6ef0ef0c107"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("ba31fd20-781d-4174-a0ac-6c11f2eaf325"));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 12, 4, 11, 58, 52, 793, DateTimeKind.Utc).AddTicks(1762),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 12, 5, 7, 22, 58, 867, DateTimeKind.Utc).AddTicks(7707));

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Likes_Post",
                type: "int",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("2991229c-8f5c-4bf3-9efd-92bb5dd5e40a"), "45e7333e-ce96-48b9-9fff-f55c2767f2d2", "Role for USER", "User", "USER" },
                    { new Guid("8dc52e3a-3149-4aa8-8e93-d46e9cbe635a"), "af710341-af78-483b-bfe7-29d91e5fd545", "Role for ADMIN", "Admin", "ADMIN" }
                });
        }
    }
}

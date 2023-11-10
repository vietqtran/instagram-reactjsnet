using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace vietqtran.DataLayer.Migrations
{
    /// <inheritdoc />
    public partial class init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("41035363-3183-44c7-a123-8f94c6dba1b8"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("deed6f77-15fc-4103-b5a2-7881eaa4e138"));

            migrationBuilder.AlterColumn<Guid>(
                name: "RoleId",
                table: "Users",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 11, 9, 6, 52, 55, 704, DateTimeKind.Utc).AddTicks(1986),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 11, 9, 6, 39, 14, 419, DateTimeKind.Utc).AddTicks(9082));

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("3deb025f-d924-4aa9-9bf0-5a32e67d1ea1"), "9cb77be0-e47e-4b38-9376-20904db64c11", "Role for ADMIN", "Admin", "ADMIN" },
                    { new Guid("aea821fb-1090-49c9-9741-0af604536426"), "a9b9974a-4ad1-49a7-b4bf-15397ab9b0d7", "Role for USER", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("3deb025f-d924-4aa9-9bf0-5a32e67d1ea1"));

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("aea821fb-1090-49c9-9741-0af604536426"));

            migrationBuilder.AlterColumn<Guid>(
                name: "RoleId",
                table: "Users",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedAt",
                table: "Users",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2023, 11, 9, 6, 39, 14, 419, DateTimeKind.Utc).AddTicks(9082),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2023, 11, 9, 6, 52, 55, 704, DateTimeKind.Utc).AddTicks(1986));

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Id", "ConcurrencyStamp", "Description", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { new Guid("41035363-3183-44c7-a123-8f94c6dba1b8"), "52febd34-c0e8-40af-923f-7013982482b2", "Role for ADMIN", "Admin", "ADMIN" },
                    { new Guid("deed6f77-15fc-4103-b5a2-7881eaa4e138"), "ca939fa9-7e4e-4fa9-bc39-70340e1b4fa8", "Role for USER", "User", "USER" }
                });
        }
    }
}

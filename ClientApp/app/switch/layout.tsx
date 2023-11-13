import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@app/globals.css"
import AuthLayout from "@components/layouts/AuthLayout"
import FormParent from "@pages/Login/FormParent"

export const metadata: Metadata = {
   title: "Instagram | Switch Accounts",
   description: "Generated by create next app",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <AuthLayout>
         <FormParent type={""}>{children}</FormParent>
      </AuthLayout>
   )
}
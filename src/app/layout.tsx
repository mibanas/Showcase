import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "Create Next App",
description: "Generated by create next app",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
        <nav className="bg-[#FD5956] py-4">
            <ul className="flex justify-center">
                <li className="mx-2">
                    <Link href='/' passHref>
                        <span className="text-white hover:text-[#000000] cursor-pointer">Home</span>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href='/service' passHref>
                        <span className="text-white hover:text-[#000000] cursor-pointer">Services</span>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href='/portfolio' passHref>
                        <span className="text-white hover:text-[#000000] cursor-pointer">Portfolio</span>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href='/team' passHref>
                        <span className="text-white hover:text-[#000000] cursor-pointer">Team</span>
                    </Link>
                </li>
                <li className="mx-2">
                    <Link href='/contact' passHref>
                        <span className="text-white hover:text-[#000000] cursor-pointer">Contact</span>
                    </Link>
                </li>
            </ul>
        </nav>
          <div >{children}</div>
        </div>
      </body>
    </html>
);
}

/*

This component creates the main layout for the student portal.
It receives the page content through the children prop.
It places the Navbar above the content and the Footer below it.
It displays a consistent layout with a full-height background.
*/

import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Describe the layout props.
interface RootLayoutProps {
  children: ReactNode;
}

// Set the website title and description.
export const metadata: Metadata = {
  title: "New Generation High School | Student Portal",
  description: "View and manage students at New Generation High School.",
};

// Arrange the navigation, page content and footer.
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
        <Navbar />

        <main className="min-w-0 flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
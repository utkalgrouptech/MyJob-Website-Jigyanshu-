import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-y-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

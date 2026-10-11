
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "SMA Negeri 1 Magelang | Gladiool High School",
    template: "%s | SMA Negeri 1 Magelang",
  },
  description:
    "Website profil SMA Negeri 1 Magelang. Mengenal profil sekolah, kegiatan, berita, prestasi, dan galeri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
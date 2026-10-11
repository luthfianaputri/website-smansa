
import NewsExplorer from "@/components/NewsExplorer";

export const metadata = {
  title: "Berita Sekolah",
  description: "Berita, kegiatan, dan informasi SMA Negeri 1 Magelang.",
};

export default function BeritaPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Jurnal SMANSA</span>
          <h1>Kabar dan cerita.</h1>
          <p>
            Jelajahi cerita pendidikan, kegiatan, prestasi, dan
            kepedulian lingkungan melalui halaman berita sekolah.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Arsip Informasi</span>
              <h2>Temukan yang menarik bagimu.</h2>
            </div>
            <p>
              Gunakan pencarian dan kategori untuk menemukan topik
              yang ingin kamu baca.
            </p>
          </div>

          <NewsExplorer />
        </div>
      </section>
    </>
  );
}
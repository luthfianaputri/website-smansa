import Reveal from "@/components/Reveal";
const fotoGaleri = [
  {
    judul: "Suasana Pembelajaran",
    kategori: "Akademik",
    gambar:
      "/images/wali kelas.jpeg",
  },
  {
    judul: "P5 Kearifan Lokal",
    kategori: "Pendidikan",
    gambar:
      "/images/P5 Kearifan lokal.jpg",
  },
  {
    judul: "Pameran Edukasi Magelang",
    kategori: "Pameran",
    gambar:
      "/images/pem.jpg",
  },
  {
    judul: "Tabligh Akbar",
    kategori: "Keagamaan",
    gambar:
      "/images/tabligh.png",
  },
  {
    judul: "MAPTA",
    kategori: "Kegiatan",
    gambar:
      "/images/mapta.jpg",
  },
];

export const metadata = {
  title: "Galeri Sekolah",
  description: "Galeri visual pendidikan dan kegiatan SMA Negeri 1 Magelang.",
};

export default function GaleriPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Potret SMANSA</span>
          <h1>Belajar dalam gambar.</h1>
          <p>
            Sebuah ruang visual tentang pendidikan, kreativitas,
            lingkungan, dan pengalaman belajar.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Galeri Visual</span>
              <h2>Setiap proses punya cerita.</h2>
            </div>
          </div>

          <div className="gallery-grid">
            {fotoGaleri.map((foto, index) => (
             <Reveal key={foto.judul} delay={index*90}>
              <article
                key={foto.judul}
                className="gallery-tile"
                style={{ backgroundImage: `url("${foto.gambar}")` }}
                role="img"
                aria-label={foto.judul}
              >
                <span>
                  <small
                    style={{
                      display: "block",
                      fontFamily: "Arial, sans-serif",
                      fontSize: 10,
                      letterSpacing: 2,
                      marginBottom: 8,
                    }}
                  >
                    0{index + 1} / {foto.kategori.toUpperCase()}
                  </small>
                  {foto.judul}
                </span>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
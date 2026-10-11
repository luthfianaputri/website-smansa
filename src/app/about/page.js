
import Link from "next/link";

export const metadata = {
  title: "Profil Sekolah",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Mengenal SMANSA</span>
          <h1>Profil sekolah.</h1>
          <p>
            Mengenal perjalanan, nilai, dan semangat SMA Negeri 1
            Magelang dalam membangun generasi yang berkarakter,
            berprestasi, dan siap menghadapi masa depan.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container profile-grid">
          <div>
            <span className="eyebrow">Sejarah Singkat</span>
            <h2 className="display-title" style={{ fontSize: 43 }}>
              Tumbuh bersama perjalanan pendidikan.
            </h2>
            <p className="prose">
              Perjalanan sekolah bermula dari perkembangan pendidikan
              menengah di Magelang setelah kemerdekaan. Pada 1950,
              sekolah-sekolah SMA yang sebelumnya terpisah disatukan.
              SMA Negeri Magelang kemudian memiliki gedung sendiri
              di Jalan Cepaka pada 1959.
            </p>
            <p className="prose">
              Seiring waktu, sekolah terus mengembangkan lingkungan
              pembelajaran yang mendukung ilmu pengetahuan,
              pembentukan karakter, dan prestasi siswa.
            </p>
          </div>

          <div
            className="intro-image"
            style={{
              backgroundImage:
                'url("images/smansa.jpg")',
            }}
            role="img"
            aria-label="Ilustrasi bangunan pendidikan"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Arah Pendidikan</span>
              <h2>Visi dan misi.</h2>
            </div>
          </div>

          <div className="profile-grid">
            <article className="info-panel">
              <span className="eyebrow">Visi</span>
              <h2>Menjadi insan yang unggul dan berkarakter.</h2>
              <p>
                Terwujudnya insan yang beriman dan bertakwa kepada
                Tuhan Yang Maha Esa, berprestasi, berbudaya,
                cinta lingkungan, adaptif, dan berdaya saing global.
              </p>
            </article>

            <article className="info-panel">
              <span className="eyebrow">Misi</span>
              <h2>Langkah nyata.</h2>
              <ul>
                <li>Menanamkan nilai agama dan Pancasila.</li>
                <li>Membangun integritas, kepedulian sosial, dan nasionalisme.</li>
                <li>Mengembangkan pembelajaran bermutu dan inovatif.</li>
                <li>Mendorong prestasi akademik maupun nonakademik.</li>
                <li>Membudayakan literasi dan kepedulian lingkungan.</li>
                <li>Mengembangkan kreativitas, kolaborasi, dan daya saing global.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Lingkungan Belajar</span>
              <h2>Ruang untuk bertumbuh.</h2>
            </div>
            <p>
              Lingkungan sekolah ideal mendukung proses belajar,
              interaksi, pengembangan minat, dan kreativitas.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-item">
              <h3>Ruang pembelajaran</h3>
              <p>
                Lingkungan belajar untuk mendukung kegiatan akademik
                dan pertukaran gagasan.
              </p>
            </article>
            <article className="feature-item">
              <h3>Pengembangan potensi</h3>
              <p>
                Kegiatan akademik dan nonakademik untuk melatih
                keterampilan serta bakat.
              </p>
            </article>
            <article className="feature-item">
              <h3>Budaya peduli</h3>
              <p>
                Pembiasaan hidup bersih, disiplin, dan menghargai
                lingkungan sekitar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Prestasi</span>
              <h2>Semangat untuk melampaui batas.</h2>
            </div>
            <p>
              Siswa SMANSA mengembangkan kemampuan melalui kompetisi
              dan kegiatan akademik maupun nonakademik.
            </p>
          </div>
          <div className="info-panel">
            <h2>Karakter kuat, prestasi hebat.</h2>
            <Link href="/berita" className="text-link">
              Jelajahi berita sekolah ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
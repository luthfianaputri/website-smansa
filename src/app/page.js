
import Link from "next/link";
import { berita } from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";
import Reveal from "@/components/Reveal";

const fotoSekolah =
  "/images/home-smansa.webp";

export default function HomePage() {
  const beritaTerbaru = [...berita]
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
    .slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Gladiool High School</span>

            <h1 className="display-title hero-title">
              Tempat ilmu
              <br />
              bertumbuh,
              <br />
              <em>karakter berakar.</em>
            </h1>

            <p className="hero-description">
              Selamat datang di SMA Negeri 1 Magelang.
              Ruang untuk mengembangkan potensi, merawat nilai,
              dan melangkah menuju masa depan.
            </p>

            <div className="hero-actions">
              <Link href="/about" className="button-primary">
                Kenali Sekolah Kami ↗
              </Link>
              <Link href="/berita" className="button-outline">
                Jelajahi Berita
              </Link>
            </div>
          </div>

          <div
            className="hero-visual hero-sekolah"
            role="img"
            aria-label="Gedung SMA Negeri 1 Magelang"
            style={{ backgroundImage: `url("${fotoSekolah}")` }}
          >
            <span className="hero-caption">
              BELAJAR · BERKARYA · MENDUNIA
            </span>
          </div>
        </div>
      </section>

      <section className="stat-band">
        <div className="container stat-grid">
          <div className="stat-item">
            <div className="stat-number">1950</div>
            <div className="stat-label">Tahun berdiri sekolah</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">GLADIOOL</div>
            <div className="stat-label">Identitas sekolah</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">JAYA</div>
            <div className="stat-label">Semangat untuk berprestasi</div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container intro-grid">
          <div
            className="intro-image"
            role="img"
            aria-label="Suasana pendidikan"
            style={{
              backgroundImage:
                'url("/images/smansa.jpg")',
            }}
          >
          </div>

          <Reveal direction="right">
          <div className="intro-copy">
            <span className="eyebrow">Tentang SMANSA</span>
            <h2>
              Lebih dari sekadar ruang belajar.
            </h2>
            <p>
              SMA Negeri 1 Magelang, yang dikenal sebagai SMANSA
              atau Gladiool High School merupakan sekolah menengah
              atas di Kota Magelang dengan perjalanan pendidikan
              yang berakar sejak 1950.
            </p>
            <p>
              SMANSA mengangkat nilai karakter, prestasi, budaya,
              kepedulian terhadap lingkungan, serta kesiapan
              menghadapi perkembangan zaman.
            </p>
            <Link href="/about" className="text-link">
              Selengkapnya tentang sekolah ↗
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Kabar Sekolah</span>
              <h2>Cerita dan inspirasi.</h2>
            </div>
            <Link href="/berita" className="text-link">
              Semua berita ↗
            </Link>
          </div>

          <div className="news-grid"> 
          {beritaTerbaru.map((item, index) => (
            <Reveal key={item.id} delay={index * 120}>
              <BeritaCard item={item} />
            </Reveal>
          ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Nilai Kami</span>
              <h2>Belajar dengan makna.</h2>
            </div>
            <p>
              Pendidikan membangun pengetahuan sekaligus membentuk
              sikap, kepedulian, dan keberanian untuk terus berkembang.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-item">
              <span className="eyebrow">01 / Karakter</span>
              <h3>Berakar pada nilai</h3>
              <p>
                Menumbuhkan integritas, tanggung jawab, dan sikap
                saling menghargai.
              </p>
            </article>

            <article className="feature-item">
              <span className="eyebrow">02 / Prestasi</span>
              <h3>Berani berkembang</h3>
              <p>
                Mendukung potensi akademik dan nonakademik melalui
                semangat belajar berkelanjutan.
              </p>
            </article>

            <article className="feature-item">
              <span className="eyebrow">03 / Masa Depan</span>
              <h3>Siap menghadapi dunia</h3>
              <p>
                Membiasakan kreativitas, literasi, kolaborasi,
                dan kepedulian terhadap lingkungan.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
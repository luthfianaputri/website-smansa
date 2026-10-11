
import Link from "next/link";
import { notFound } from "next/navigation";
import { berita, formatTanggal } from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

export function generateStaticParams() {
  return berita.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = berita.find((beritaItem) => beritaItem.id === id);

  if (!item) {
    return { title: "Berita tidak ditemukan" };
  }

  return {
    title: item.judul,
    description: item.ringkasan,
  };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const item = berita.find((beritaItem) => beritaItem.id === id);

  if (!item) {
    notFound();
  }

  const beritaLain = berita
    .filter((beritaItem) => beritaItem.id !== item.id)
    .slice(0, 2);

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <Link href="/berita" className="text-link" style={{ color: "#e2c786" }}>
            ← Kembali ke berita
          </Link>

          <div style={{ marginTop: 30 }}>
            <span className="news-category">{item.kategori}</span>
            <h1>{item.judul}</h1>
            <p>{formatTanggal(item.tanggal)}</p>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container article-layout">
          <article>
            <div
              className="article-image"
              role="img"
              aria-label={item.label}
              style={{ backgroundImage: `url("${item.gambar}")` }}
            />

            <p className="prose">{item.ringkasan}</p>

            <div className="article-body">
              <p>{item.isi}</p>
              <p>
                Pendidikan merupakan perjalanan yang melibatkan
                pengetahuan, pengalaman, dan pembentukan karakter.
                Melalui lingkungan yang mendukung, setiap siswa
                memiliki kesempatan untuk berkembang dan berkontribusi
                positif bagi masyarakat.
              </p>
            </div>

            <Link href="/berita" className="button-outline">
              ← Lihat berita lainnya
            </Link>
          </article>

          <aside className="article-sidebar">
            <span className="eyebrow">Tentang Artikel</span>
            <h3>{item.judul}</h3>
            <p className="prose">Kategori: {item.kategori}</p>
            <p className="prose">Tanggal: {formatTanggal(item.tanggal)}</p>
            <hr style={{ border: 0, borderTop: "1px solid #d4cdbd" }} />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Baca Juga</span>
              <h2>Cerita lainnya.</h2>
            </div>
          </div>

          <div className="news-grid">
            {beritaLain.map((beritaItem) => (
              <BeritaCard key={beritaItem.id} item={beritaItem} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { berita, formatTanggal } from "@/data/berita";

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const item = berita.find((beritaItem) => beritaItem.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="detail-berita">
      <div className="detail-container">
        <Link href="/berita" className="back-link">
          ← Kembali ke Berita
        </Link>

        <article className="detail-article">
          <span className="news-category detail-category">
            {item.kategori}
          </span>

          <h1>{item.judul}</h1>

          <p className="detail-date">
            {formatTanggal(item.tanggal)}
          </p>

          <div
            className="detail-image"
            style={{
              backgroundImage: `url("${item.gambar}")`,
            }}
            role="img"
            aria-label={item.judul}
          />

          <p className="detail-summary">
            {item.ringkasan}
          </p>

          <div className="detail-content">
            {Array.isArray(item.isi) &&
              item.isi.map((paragraf, index) => (
                <p key={index}>{paragraf}</p>
              ))}
          </div>
        </article>
      </div>
    </main>
  );
}
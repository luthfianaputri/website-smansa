
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" id="kontak">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand">
            <span className="brand-mark">
                <img
                    src="/images/logo smansa.png"
                />
            </span>
            <span className="brand-copy">
              SMA NEGERI 1 MAGELANG
              <small>GLADIOOL HIGH SCHOOL</small>
            </span>
          </Link>
          <p>
            Ruang untuk belajar, bertumbuh, membangun karakter,
            dan menyiapkan generasi yang siap menghadapi masa depan.
          </p>
        </div>

        <div>
          <h3>Jelajahi</h3>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">Profil Sekolah</Link>
            <Link href="/berita">Berita</Link>
            <Link href="/galeri">Galeri</Link>
          </div>
        </div>

        <div>
          <h3>Informasi Sekolah</h3>
          <p>Jl. Cepaka No. 1, Magelang, Jawa Tengah</p>
          <p>Telepon: (0293) 362531</p>
          <p>Email: smansa_mgl@yahoo.co.id</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} SMA Negeri 1 Magelang.
        </div>
      </div>
    </footer>
  );
}
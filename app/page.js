export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Fashion & Lifestyle</span>
            <h1>Temukan gaya terbaru untuk setiap momen.</h1>
            <p>
              Belanja pakaian pria, wanita, dan lifestyle dengan promo eksklusif,
              rekomendasi personal, dan pengiriman cepat.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#categories">Belanja Sekarang</a>
              <a className="btn btn-outline" href="#trending">Lihat Promo</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card hero-card-large">
              Promo Summer Sale
              <br />
              <strong>Diskon hingga 70%</strong>
            </div>
            <div className="hero-card hero-card-small">Best seller laki-laki</div>
            <div className="hero-card hero-card-small">Baru: Koleksi Activewear</div>
          </div>
        </div>
      </section>

      <section className="search-bar container">
        <div className="search-card">
          <input type="text" placeholder="Cari produk, brand, atau kategori" />
          <button className="btn btn-primary">Cari</button>
        </div>
      </section>

      <section className="section categories" id="categories">
        <div className="container section-header">
          <div>
            <span className="eyebrow">Kategori Unggulan</span>
            <h2>Pilih gaya favoritmu</h2>
          </div>
        </div>
        <div className="grid grid-4">
          <a className="category-card" href="#">Pria</a>
          <a className="category-card" href="#">Wanita</a>
          <a className="category-card" href="#">Anak</a>
          <a className="category-card" href="#">Beauty</a>
        </div>
      </section>

      <section className="section trending" id="trending">
        <div className="container section-header">
          <div>
            <span className="eyebrow">Flash Sale</span>
            <h2>Penawaran Spesial Hari Ini</h2>
          </div>
          <div className="countdown">Sisa waktu: 04:12:08</div>
        </div>
        <div className="grid grid-3">
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-body">
              <p className="product-category">Shoes</p>
              <h3>Running Sneaker</h3>
              <div className="product-meta">
                Rp 299.000 <span className="product-discount">-25%</span>
              </div>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-body">
              <p className="product-category">Jaket</p>
              <h3>Oversized Jacket</h3>
              <div className="product-meta">
                Rp 499.000 <span className="product-discount">-30%</span>
              </div>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-body">
              <p className="product-category">Dress</p>
              <h3>Summer Midi Dress</h3>
              <div className="product-meta">
                Rp 379.000 <span className="product-discount">-20%</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section featured" id="collections">
        <div className="container section-header">
          <div>
            <span className="eyebrow">Rekomendasi Untukmu</span>
            <h2>Produk populer + personal choice</h2>
          </div>
        </div>
        <div className="grid grid-4">
          <article className="featured-card">
            <div className="featured-image"></div>
            <h3>Minimal White Shirt</h3>
            <p>Rp 249.000</p>
          </article>
          <article className="featured-card">
            <div className="featured-image"></div>
            <h3>Comfy Hoodie</h3>
            <p>Rp 189.000</p>
          </article>
          <article className="featured-card">
            <div className="featured-image"></div>
            <h3>Everyday Jogger</h3>
            <p>Rp 159.000</p>
          </article>
          <article className="featured-card">
            <div className="featured-image"></div>
            <h3>Denim Jacket</h3>
            <p>Rp 379.000</p>
          </article>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer-inner">
          <div>
            <h2>Njie Outfit</h2>
            <p>
              Platform fashion dan lifestyle modern untuk gaya sehari-hari dan acara
              spesial.
            </p>
          </div>
          <div>
            <h3>Hubungi Kami</h3>
            <p>email: support@njie-outfit.example</p>
            <p>telp: +62 812 3456 7890</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

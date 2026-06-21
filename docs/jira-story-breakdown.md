# Jira-Style Story Breakdown

## Epic: Browse & Discover

### US-101 — Homepage Hero & Category Discovery
- Description: Tampilkan banner promosi, kategori utama, dan featured products secara responsif.
- Acceptance Criteria:
  - Homepage menampilkan banner hero dengan CTA.
  - Kategori utama tampil sebagai tile dan dapat diklik.
  - Produk featured muncul dalam satu row.
- Priority: High

### US-102 — Search dengan Autocomplete
- Description: Search bar global menampilkan suggestion dan support typo tolerance.
- Acceptance Criteria:
  - Saat mengetik, muncul autocomplete suggestion.
  - Hasil search menampilkan product list sesuai query.
  - Typo sederhana tetap menghasilkan suggestion relevan.
- Priority: High

### US-103 — PLP Filter & Sort
- Description: Product listing page menyediakan filter harga, brand, ukuran, warna, dan sort.
- Acceptance Criteria:
  - Filter dasar dapat diterapkan secara kombinasi.
  - Produk ter-update sesuai filter di UI.
  - User dapat memilih sort by relevance, price, newest.
- Priority: High

## Epic: Product Detail & Selection

### US-201 — Product Detail Page
- Description: Tampilkan detail produk lengkap dengan foto, varian, dan deskripsi.
- Acceptance Criteria:
  - Galeri foto bekerja dengan zoom.
  - Varian warna/ukuran dapat dipilih.
  - Stok dan harga tampil nyata.
- Priority: High

### US-202 — Add to Cart
- Description: User dapat menambahkan produk dan varian ke keranjang.
- Acceptance Criteria:
  - Tombol Add to Cart tersedia ketika stok > 0.
  - Cart counter bertambah setelah klik.
  - User menerima konfirmasi singkat.
- Priority: High

### US-203 — Wishlist Basic
- Description: User dapat menyimpan produk di wishlist untuk dilihat kemudian.
- Acceptance Criteria:
  - Tombol add/remove wishlist ada.
  - Produk tersimpan muncul di halaman wishlist.
- Priority: Medium

## Epic: Cart & Checkout

### US-301 — Cart Review
- Description: Tampilkan ringkasan keranjang dengan item, qty, subtotal, dan apply promo.
- Acceptance Criteria:
  - User dapat ubah qty atau hapus item.
  - Ringkasan total harga otomatis update.
  - Promo auto-apply atau input voucher tersedia.
- Priority: High

### US-302 — Multi-step Checkout
- Description: Checkout dibagi menjadi alamat, pengiriman, dan pembayaran.
- Acceptance Criteria:
  - Checkout wizard menampilkan 3 step.
  - User dapat kembali antar step tanpa kehilangan data.
  - Konfirmasi order berhasil memunculkan nomor order.
- Priority: High

### US-303 — Payment Integration
- Description: Integrasi minimal 1 payment gateway untuk kartu atau transfer.
- Acceptance Criteria:
  - Payment option tampil.
  - Transaksi checkout berhasil dan order status berubah.
- Priority: High

## Epic: User Account & Order Tracking

### US-401 — User Auth & Profile
- Description: User dapat registrasi/login, lihat profil, dan kelola alamat.
- Acceptance Criteria:
  - Login/registration via email.
  - Profil user dapat diedit.
  - Alamat tersimpan reusable di checkout.
- Priority: High

### US-402 — Order History & Tracking
- Description: User bisa melihat order history dan status order.
- Acceptance Criteria:
  - Order history menampilkan list order.
  - Setiap order menunjukkan status terkini.
- Priority: Medium

### US-403 — Return Request Basic
- Description: User dapat mengajukan return exchange dari order.
- Acceptance Criteria:
  - User dapat pilih item return.
  - Form return terkirim ke sistem.
- Priority: Low

## Epic: Admin & Merchant

### US-501 — Admin Product Management
- Description: Admin dapat menambah, mengubah, dan menonaktifkan produk.
- Acceptance Criteria:
  - Admin able to create/update/delete product record.
  - Produk berubah tampil di katalog sesuai status publish.
- Priority: High

### US-502 — Admin Home CMS
- Description: Admin dapat update homepage banner dan campaign tiles.
- Acceptance Criteria:
  - Admin UI untuk upload banner.
  - Homepage menampilkan content yang di-update tanpa deploy.
- Priority: High

### US-503 — Merchant Order Processing
- Description: Merchant dapat melihat pesanan masuk dan update fulfillment.
- Acceptance Criteria:
  - Merchant dashboard menampilkan order queue.
  - Merchant dapat update order status ke “packed”/“shipped”.
- Priority: Medium

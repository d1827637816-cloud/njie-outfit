# MVP Scope Document

## Ringkasan
MVP platform e-commerce fashion dan lifestyle berfokus pada pengalaman browsing, shopping, checkout, serta manajemen produk dasar. Tujuan utama adalah membuat alur beli langsung, mobile-friendly, dan memungkinkan transaksi pertama berlangsung tanpa hambatan.

## Goal MVP
- Permudah user menemukan dan membeli produk.
- Sediakan alur checkout cepat.
- Aktifkan admin untuk mempublish produk dan campaign.
- Pastikan pengalaman dasar operasional merchant tersedia.

## In-Scope
- Homepage dengan CTA promo dan kategori.
- Search, kategori, dan Product Listing Page (PLP).
- Product Detail Page (PDP) dengan varian dan add to cart.
- Cart dan multi-step checkout.
- User auth, profile, dan saved address.
- Order placement dan order confirmation.
- Admin product management dan homepage CMS.
- Integrasi payment gateway minimal.
- Responsive mobile-first UI.

## Out-of-Scope
- Loyalty / VIP program.
- Full merchant multi-tenant onboarding.
- Advanced personalization ML.
- Full return automation.
- Multi-courier management.
- Review foto user.
- Fraud detection engine.
- Analytics dashboard beyond basic reports.

## Release Criteria
- Alur utama end-to-end berjalan: Homepage → PDP → Cart → Checkout → Order confirmation.
- User dapat login/register dan menyimpan alamat.
- Admin dapat menambah/edit produk dan update homepage content.
- Payment berhasil diproses melalui satu gateway.
- UI responsif dan mobile-friendly.

## Success Metrics
- Conversion rate dari PLP ke checkout.
- Checkout completion rate.
- Page load time <= 3 detik mobile.
- Time-to-first-order untuk pengguna baru.
- Kecepatan update konten admin tanpa deploy.

## MVP Sprint Priorities
### Sprint 1: Core Commerce
- Homepage.
- Search + PLP.
- PDP.
- Cart.
- Checkout.
- User auth.
- Product service.
- Order service.

### Sprint 2: Account & Operations
- User dashboard.
- Order history.
- Address management.
- Admin product management.
- Admin order workflow.

### Sprint 3: Growth & Optimization
- Wishlist.
- Search autocomplete.
- Voucher automation.
- Merchant dashboard.
- Recommendation basics.

### Sprint 4: Retention
- Loyalty basic.
- Return request form.
- Review display.
- Basic analytics reports.

## Notes
MVP akan disusun dengan pendekatan modular agar fitur tambahan dapat diimplementasikan secara terpisah tanpa memblokir live commerce flow.

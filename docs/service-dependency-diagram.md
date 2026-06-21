# Service Dependency Diagram

## Overview
Diagram ini menggambarkan dependensi utama antara frontend, API gateway, layanan backend, dan layanan pendukung untuk platform e-commerce fashion.

```mermaid
flowchart TD
  A[Web Frontend / Mobile App] -->|API requests| B[API Gateway]
  B --> C[Auth Service]
  B --> D[Product / Catalog Service]
  B --> E[Order Service]
  B --> F[Payment Service]
  B --> G[Search & Recommendation Service]
  B --> H[Admin Service]
  B --> I[Merchant Service]
  B --> J[Notification Service]

  D -->|product data| K[(PostgreSQL)]
  D -->|cache product metadata| L[(Redis)]
  D -->|search indexing| M[(Elasticsearch / Algolia)]

  E -->|order data| K
  E -->|cache session/cart| L
  F -->|payment records| K
  G -->|search index| M
  H -->|campaign content| K
  I -->|merchant data| K

  C -->|user / auth data| K
  J -->|notification logs| K

  E -->|payment update events| F
  F -->|payment confirmation events| E
  E -->|order events| J
  H -->|campaign events| J
  G -->|behavior events| J

  subgraph Datastores
    K
    L
    M
  end
```

## Diagram Penjelasan
- `Web Frontend / Mobile App`: UI customer-facing. Semua permintaan melewati API Gateway.
- `API Gateway`: central routing, auth enforcement, dan rate limiting.
- `Auth Service`: mengelola login, register, dan user profile.
- `Product / Catalog Service`: menyajikan katalog produk, varian, dan metadata filtering.
- `Order Service`: lifecycle order, reservasi stok, fulfillment.
- `Payment Service`: integrasi gateway, pembayaran, dan webhook handling.
- `Search & Recommendation Service`: pencarian cepat, autocomplete, dan rekomendasi personal/basic.
- `Admin Service`: CMS, campaign, promo rule, dan admin workflows.
- `Merchant Service`: merchant inventory management dan order fulfillment updates.
- `Notification Service`: email / SMS / push notifications.
- `PostgreSQL`: relational datastore untuk user, order, auth, content, admin.
- `Redis`: cache session, cart state, dan filter cache.
- `Elasticsearch / Algolia`: search engine untuk query dan autocomplete.

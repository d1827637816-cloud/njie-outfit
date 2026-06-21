# Technical Feature Specs per Service

## A. Web Frontend
### Purpose
Menyajikan UI customer-facing untuk semua halaman utama dan pengalaman pembelian.

### Key Pages
- Homepage
- Search / PLP
- Product Detail
- Cart
- Checkout
- User Dashboard
- Login / Register

### Components
- Hero banner
- Category tiles
- Product card
- Filter panel
- Quick view modal
- Checkout steps
- Order timeline

### API Contracts
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/cart`
- `GET /api/cart`
- `POST /api/checkout`
- `POST /api/auth/login`
- `GET /api/orders`

### Non-functional
- SSR/SSG untuk SEO (Next.js direkomendasikan)
- Mobile-first responsive design
- Data caching via SWR / React Query
- Accessibility support
- Secure auth token storage

## B. Auth Service
### Purpose
Kelola user authentication, session, dan profil.

### Features
- Register, login, logout
- Password hash, email verification
- JWT session dengan refresh token
- Profile update dan address management

### Endpoints
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`
- `GET /auth/me`
- `PUT /auth/me`
- `POST /auth/addresses`

### Data Model
- User {id, email, password_hash, name, phone, role, created_at}
- Address {id, user_id, label, street, city, postal_code, country}

### Security
- bcrypt/argon2 password storage
- rate limiter login
- JWT expiration + refresh
- secure cookie atau Authorization header

## C. Product / Catalog Service
### Purpose
Menyimpan dan melayani katalog produk.

### Features
- CRUD produk
- Variants stock
- Category / brand taxonomy
- Featured / promotional flags

### Endpoints
- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`

### Data Model
- Product {id, name, slug, description, price, sale_price, brand_id, categories, tags, status}
- ProductVariant {id, product_id, sku, color, size, stock, images}
- Brand {id, name}
- Category {id, name, parent_id}

### Non-functional
- Support filtering dan pagination
- Caching via Redis
- Event publish on product update

## D. Order Service
### Purpose
Mengelola lifecycle order dari cart hingga fulfillment.

### Features
- Create order
- Order status update
- Order history untuk user
- Inventory reservation

### Endpoints
- `POST /orders`
- `GET /orders`
- `GET /orders/:id`
- `PUT /orders/:id/status`

### Data Model
- Order {id, user_id, total_amount, shipping_address_id, payment_status, fulfillment_status, created_at}
- OrderItem {id, order_id, product_variant_id, qty, price}
- Shipment {id, order_id, courier, service, tracking_number, status}

### Integration
- Auth service untuk user identity
- Product service untuk stock validation
- Payment service untuk payment confirmation

### Non-functional
- Transactional integrity
- Idempotent order creation
- Soft-cancel support

## E. Payment Service
### Purpose
Integrasi dengan payment gateway dan kelola status pembayaran.

### Features
- Payment session creation
- Webhook handling
- Payment status tracking

### Endpoints
- `POST /payments`
- `GET /payments/:id`
- `POST /payments/webhook`

### Data Model
- Payment {id, order_id, method, status, provider_ref, amount}

### Integration
- Gateway seperti Midtrans / Stripe / Xendit
- Order service untuk order status update

### Non-functional
- Secure key storage
- Retry webhook handling
- Logging untuk reconciliation

## F. Search & Recommendation Service
### Purpose
Menyediakan pencarian cepat dan rekomendasi produk.

### Features
- Search index sync
- Autocomplete suggestions
- Basic recommendation based on popular/trending

### Endpoints
- `GET /search`
- `GET /autocomplete`
- `GET /recommendations`

### Data Model
- Search index based on product fields
- Event-driven update feed

### Tech
- Elasticsearch / Algolia

### Non-functional
- Low latency (< 100ms)
- Typo tolerance
- Relevancy tuning

## G. Merchant Service
### Purpose
Memberikan merchant/seller operations.

### Features
- Merchant dashboard
- Inventory bulk upload
- Order fulfillment update

### Endpoints
- `GET /merchant/orders`
- `PUT /merchant/orders/:id/status`
- `POST /merchant/products/bulk-upload`

### Data Model
- Merchant {id, name, status}
- MerchantProduct {id, merchant_id, product_id, sku}

### Integration
- Product service
- Order service

### Non-functional
- Role-based access
- Audit trail

## H. Admin Service
### Purpose
Menangani CMS, campaign, dan content control.

### Features
- Homepage banner/campaign management
- Promo rule management
- User/merchant management

### Endpoints
- `GET /admin/campaigns`
- `POST /admin/campaigns`
- `PUT /admin/campaigns/:id`
- `GET /admin/users`

### Data Model
- Campaign {id, title, banner, cta_link, active_from, active_to}
- PromoRule {id, code, type, conditions}

### Non-functional
- Admin audit log
- Access control
- Preview support

## I. Notification Service
### Purpose
Mengirim email / push / SMS notifikasi.

### Features
- Order confirmation email
- Shipping update notification
- Promo email trigger

### Endpoints
- `POST /notifications/email`
- `POST /notifications/sms`
- `POST /notifications/push`

### Integration
- Order service
- Auth service
- Campaign service

### Non-functional
- Retry on failure
- Template management
- Delivery logging

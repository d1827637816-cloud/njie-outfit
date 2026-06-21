export const products = [
  {
    id: '1',
    slug: 'minimal-white-shirt',
    name: 'Minimal White Shirt',
    category: 'Pria',
    brand: 'Njie Basics',
    price: 249000,
    salePrice: 199000,
    rating: 4.8,
    reviews: 112,
    description:
      'Kemeja putih minimalis dengan potongan modern. Cocok untuk acara formal dan kasual.',
    images: ['/images/product-shirt-1.jpg', '/images/product-shirt-2.jpg'],
    variants: [
      { color: 'Putih', size: 'S', stock: 12 },
      { color: 'Putih', size: 'M', stock: 8 },
      { color: 'Putih', size: 'L', stock: 5 },
    ],
  },
  {
    id: '2',
    slug: 'comfy-hoodie',
    name: 'Comfy Hoodie',
    category: 'Wanita',
    brand: 'Njie Leisure',
    price: 189000,
    salePrice: 159000,
    rating: 4.6,
    reviews: 89,
    description:
      'Hoodie nyaman dengan bahan lembut dan model relaxed fit. Ideal untuk gaya santai.',
    images: ['/images/product-hoodie-1.jpg', '/images/product-hoodie-2.jpg'],
    variants: [
      { color: 'Hitam', size: 'S', stock: 10 },
      { color: 'Hitam', size: 'M', stock: 7 },
      { color: 'Hitam', size: 'L', stock: 4 },
    ],
  },
  {
    id: '3',
    slug: 'everyday-jogger',
    name: 'Everyday Jogger',
    category: 'Pria',
    brand: 'Njie Sport',
    price: 159000,
    salePrice: 129000,
    rating: 4.7,
    reviews: 74,
    description:
      'Celana jogger serbaguna dengan bahan ringan dan elastis. Cocok untuk kerja dan olahraga ringan.',
    images: ['/images/product-jogger-1.jpg', '/images/product-jogger-2.jpg'],
    variants: [
      { color: 'Abu', size: 'M', stock: 15 },
      { color: 'Abu', size: 'L', stock: 9 },
    ],
  },
  {
    id: '4',
    slug: 'denim-jacket',
    name: 'Denim Jacket',
    category: 'Unisex',
    brand: 'Njie Denim',
    price: 379000,
    salePrice: 349000,
    rating: 4.9,
    reviews: 54,
    description:
      'Jaket denim premium dengan detail jahitan modern. Pilihan kuat untuk layering stylish.',
    images: ['/images/product-jacket-1.jpg', '/images/product-jacket-2.jpg'],
    variants: [
      { color: 'Biru', size: 'M', stock: 6 },
      { color: 'Biru', size: 'L', stock: 3 },
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

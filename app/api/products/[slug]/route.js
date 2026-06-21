import { getProductBySlug } from '../../../../lib/products';

export async function GET(request, { params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return new Response(JSON.stringify({ error: 'Product not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ data: product }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

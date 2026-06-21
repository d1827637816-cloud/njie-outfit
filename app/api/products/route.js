import { products } from '../../../lib/products';

export async function GET() {
  return new Response(JSON.stringify({ data: products }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

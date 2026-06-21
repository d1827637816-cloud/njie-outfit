let orders = [];

export async function POST(request) {
  try {
    const body = await request.json();
    const { shippingAddress, paymentMethod, items, total } = body;

    if (!shippingAddress || !paymentMethod || !items || !Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: 'Payload checkout tidak lengkap.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const orderId = `ORD-${Date.now()}`;
    const order = {
      orderId,
      shippingAddress,
      paymentMethod,
      items,
      total,
      createdAt: new Date().toISOString(),
    };

    orders.push(order);

    return new Response(JSON.stringify({ data: { orderId, order } }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Gagal memproses checkout.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

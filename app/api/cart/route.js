let cart = [
  {
    id: '1',
    productId: '1',
    name: 'Minimal White Shirt',
    variant: 'Putih / M',
    price: 199000,
    quantity: 1,
  },
];

export async function GET() {
  return new Response(JSON.stringify({ data: cart }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const body = await request.json();

  if (body.action === 'clear') {
    cart = [];
    return new Response(JSON.stringify({ data: cart }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const existingIndex = cart.findIndex((item) => item.id === body.id);

  if (body.action === 'set') {
    if (existingIndex >= 0) {
      cart[existingIndex].quantity = Math.max(1, body.quantity || 1);
    }
  } else {
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += body.quantity || 1;
    } else {
      cart.push({
        id: body.id,
        productId: body.productId,
        name: body.name,
        variant: body.variant,
        price: body.price,
        quantity: body.quantity || 1,
      });
    }
  }

  return new Response(JSON.stringify({ data: cart }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request) {
  const body = await request.json();
  cart = cart.filter((item) => item.id !== body.id);

  return new Response(JSON.stringify({ data: cart }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

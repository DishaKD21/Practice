'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

type Product = {
  id: number;
  name: string;
};

const products: Product[] = [
  { id: 1, name: 'iPhone 14' },
  { id: 2, name: 'Samsung Galaxy' },
  { id: 3, name: 'MacBook Pro' },
];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id'); // get id from query like ?id=2

  // Convert id to number and find matching product
  const product = products.find((p) => p.id === Number(id));

  return (
    <div className="text-xl font-medium">
      {product ? (
        <div>Product: {product.name}</div>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}

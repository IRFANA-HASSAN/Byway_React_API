// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, className = ''  }) => {
  return (
    <div className={`w-full  xl:w-[120%] ${className}`}>
      <div className="bg-white shadow-lg rounded-lg w-full">
        <div className="p-4">
          <img
            src={image || '/placeholder.png'}
            alt={title}
            className="w-full max-w-sm mx-auto mb-4 object-contain"
          />
          <div className="mt-4 space-y-3">
            <div className="text-2xl font-semibold text-[#0F172A]">
              ${price}
              <span className="ml-2 line-through text-gray-400">$99.5</span>
              <span className="ml-2 text-[#16A34A] text-xl font-medium">50% Off</span>
            </div>

            <button onClick={() => alert(`Product add to cart`)} className="w-full bg-[#020617] text-sm font-medium text-white py-4 rounded-lg hover:bg-[#0F1941] transition">
              Add To Cart
            </button>
            <button onClick={() => alert(`Clicked on Buy Now`)} className="w-full border border-[#020617] text-sm font-medium text-[#0F172A] py-4 rounded hover:bg-gray-400 transition">
              Buy Now
            </button>
          </div>
        </div>

        <hr className="my-4" />

        {/* Share Section */}
        <div className="p-4">
          <h4 className="text-xl font-medium text-[#0F172A] mb-2">Share</h4>
          <div className="flex justify-around mb-4">
            {['Facebook', 'GitHub', 'Google', 'Twitter', 'Microsoft'].map((name) => (
              <a
                key={name}
                href="#"
                className="bg-[#EFF1F4] rounded-full p-1 hover:scale-105 transition"
                aria-label={`Share on ${name}`}
              >
                <img
                  src={`/assets/icons/${name}.svg`}
                  alt={name}
                  className="h-12 w-12 bg-white rounded-full p-2"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type TopCoursesProps = {
  title: string;
  className?: string;
};

const TopCourses: React.FC<TopCoursesProps> = ({ title, className = '' }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className={`w-[90%] max-w-[1900px] mx-auto ${className}`}>
      <div className="sm:flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-[#0F172A]">{title}</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-blue-500 hover:underline"
        >
          {showAll ? 'See Less' : 'See All'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {visibleProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white border border-gray-300 shadow-[0_0_8px_0_#3B82F61F] rounded-lg overflow-hidden hover:shadow-md transition">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain p-4"
              />
              <div className="px-4 pb-4">
                <h3 className="font-semibold text-lg text-[#0F172A] leading-tight mt-2">
                  {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
                </h3>
                <p className="text-sm font-normal text-[#334155]">By Ronald Richards</p>

                <div className="flex items-center text-yellow-500 mt-1">
                  {'★'.repeat(Math.round(product.rating.rate)) + '☆'.repeat(5 - Math.round(product.rating.rate))}
                  <span className="text-[#334155] text-xs font-semibold ml-1">
                    ({product.rating.count} Ratings)
                  </span>
                </div>

                <p className="text-sm font-normal text-[#334155] mt-1">
                  22 Total Hours. 155 Lectures. Beginner
                </p>

                <p className="text-xl font-semibold text-[#0F172A] mt-2">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopCourses;

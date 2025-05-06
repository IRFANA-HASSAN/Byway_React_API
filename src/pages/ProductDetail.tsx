import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Navbarsecond from '../components/Navbarsecond';
import CourseTabs from '../components/CourseTabs';
import InstructorAndSyllabus from '../components/InstructorAndSyllabus';
import LearnerReviews from '../components/LearnerReviews';
import Testimonials from '../components/Testimonials.tsx';
import TopCourses from '../components/TopCourses.tsx';
import ProductCard  from '../components/ProductCard.tsx';

// Simple Breadcrumb Component
const Breadcrumb: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <nav className="text-sm text-gray-500 p-4">{children}</nav>
);

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <>
      <Navbarsecond />
     <div className='absolute right-[10%] lg:right-[0] xl:right-[8%] top-[18%]'><ProductCard image={product.image}  title={product.title} price={product.price} className = 'hidden lg:inline-block'/></div>
     <section className='bg-[#F8FAFC] py-4 mb-8'>
          {/* Breadcrumb */}
          <Breadcrumb>
            <div className="flex items-center gap-3 md:py-8 w-[90%] max-w-[1900px] mx-auto">
              <a href="/" className="text-sm md:text-base font-normal text-[#334155]">Home</a>
              <img src="/assets/icons/Vector.svg" alt="arrow" className="w-4 h-4" />
              <a href="/#products" className="text-sm md:text-base font-normal text-[#334155]">Products</a>
              <img src="/assets/icons/Vector.svg" alt="arrow" className="w-4 h-4" />
              <span className="text-sm md:text-base font-normal text-[#2563EB]">{product.title}</span>
            </div>
          </Breadcrumb>
         {/* Main Section */}
        <main className="flex flex-col lg:flex-row justify-between gap-12 w-[90%] max-w-[1900px] mx-auto">
          {/* Left: Product Description */}
          <div className="py-6 w-full lg:w-3/5">
            <ProductCard image={product.image}  title={product.title} price={product.price} className = 'lg:hidden my-8'/>
            <h1 className="text-lg md:text-5xl font-bold mb-6 text-[#0F172A]">{product.title}</h1>
            <p className="text-base md:text-lg text-[#334155] mb-4">{product.description}</p>
            
            <div className="sm:flex items-center gap-2 text-yellow-500 mb-6">
              <span className="text-[#FEC84B] text-lg font-semibold ml-1">{product.rating.rate}</span>
              {'★'.repeat(Math.round(product.rating?.rate || 0)) +
                '☆'.repeat(5 - Math.round(product.rating?.rate || 0))}
              <span className="text-[#334155] ml-2">({product.rating?.count || 0} Rating)</span>
              <span className="w-px h-4 bg-[#334155]"></span>
              <span className="text-[#334155]">22 Total Hours. 155 Lectures. All levels</span>
            </div>

            <div className="space-y-6">
              {/* Creator Info */}
              <div className="flex items-center gap-3">
                <img src="/assets/icons/model-3.svg" alt="Creator" className="w-11 h-11 rounded-full" />
                <p className="text-base text-gray-700">Created by <a href="#" className="text-blue-600 hover:underline">Ronal Richards</a></p>
              </div>

              {/* Languages */}
              <div className="flex items-center gap-3">
                <img src="/assets/icons/globe.svg" alt="globe" className="w-8 h-8" />
                <p className="text-base text-gray-700">English, Spanish, Italian, German</p>
              </div>
            </div>
          </div>
        </main>
     </section>

      {/* Additional Sections */}
      <CourseTabs />
      <InstructorAndSyllabus />
      <LearnerReviews />
      <Testimonials />
      <TopCourses title="More Courses Like This" className="my-28" />
    </>
  );
};

export default ProductDetail;

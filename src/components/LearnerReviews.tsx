import React, { useState } from 'react';

const allReviews = [
  {
    name: 'Mark Doe',
    rating: 5,
    date: '22nd March, 2024',
    comment:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    avatar: '/assets/icons/model-4.png',
  },
  {
    name: 'Mark Doe',
    rating: 5,
    date: '22nd March, 2024',
    comment:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    avatar: '/assets/icons/model-4.png',
  },
  {
    name: 'Mark Doe',
    rating: 5,
    date: '22nd March, 2024',
    comment:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    avatar: '/assets/icons/model-4.png',
  },
  // Add more dummy reviews
  {
    name: 'Anna Smith',
    rating: 4,
    date: '15th April, 2024',
    comment:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    avatar: '/assets/icons/model-4.png',
  },
  {
    name: 'John Lee',
    rating: 5,
    date: '10th May, 2024',
    comment:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    avatar: '/assets/icons/model-4.png',
  },
  {
    name: 'Emily Carter',
    rating: 5,
    date: '1st June, 2024',
    comment:
      'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.',
    avatar: '/assets/icons/model-4.png',
  },
];

const LearnerReviews: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 3);

  return (
    <div className=" w-[90%] max-w-[1900px] mx-auto mb-8">
      <h2 className="text-xl font-semibold mb-4">Learner Reviews</h2>

        <div className="flex flex-col justify-between mdt:flex-row sm:items-start gap-3">
            {/* Summary Ratings */}
            <div className="lg:w-1/5 mb-6 sm:mb-0">
                <div className="flex items-center gap-2">
                    <span className="flex items-center text-2xl font-medium"><img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" /> 4.6</span>
                    <span className="text-sm text-gray-600">168,951 reviews</span>
                </div>
                <div className="space-y-2">
                    {/* <!-- 5 Stars - 80% --> */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm text-gray-700">80%</h5>
                    </div>

                    {/* <!-- 4 Stars - 10% --> */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm text-gray-700">10%</h5>
                    </div>

                    {/* <!-- 3 Stars - 5% --> */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm text-gray-700">5%</h5>
                    </div>

                    {/* <!-- 2 Stars - 3% --> */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm text-gray-700">3%</h5>
                    </div>

                    {/* <!-- 1 Star - 2% --> */}
                    <div className="flex items-center gap-2">
                        <div className="flex">
                        <img src="/assets/icons/star.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        <img src="/assets/icons/emptystar.svg" alt="star" className="w-4 h-4" />
                        </div>
                        <h5 className="text-sm text-gray-700">2%</h5>
                    </div>
                    </div>

            </div>

            {/* Reviews */}
            <div className="w-full mdt:w-4/5 space-y-4 ">
                {displayedReviews.map((review, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="sm:flex  justify-between gap-4 mb-2">
                      <div className=''>
                        <div className='flex items-center gap-4'>
                            <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover"/>
                            <p className="font-semibold text-lg text-[#0F172A]">{review.name}</p>
                        </div>
                      </div>
                      <div className='sm:w-4/6'>
                          <div className="text-lg text-[#0F172A] font-semibold flex items-center gap-8 mb-3">
                             <div className='flex items-center gap-1'>
                              <img src="/assets/icons/star.svg" alt="star" className="w-5 h-5" /> 
                              <p  className="text-lg text-[#0F172A] font-semibold">{review.rating}</p>
                             </div>
                              <p  className="text-sm text-[#334155] font-normal"> Reviewed on {review.date}</p>
                          </div>
                          <p className="text-base font-normal text-[#334155]">{review.comment}</p>
                      </div>
                    </div>
                    
                </div>
                ))}

                {/* Toggle Button */}
                <div className="my-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-3 border border-[#0F172A] text-sm font-medium rounded-md hover:bg-gray-100 transition"
                    >
                        {showAll ? 'Show less' : 'View more Reviews'}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LearnerReviews;

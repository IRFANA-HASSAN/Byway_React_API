import React, { useState } from 'react';

const CourseTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Description');
  const tabs = ['Description', 'Instructor', 'Syllabus', 'Reviews'];

  return (
    <div className=" w-[90%] max-w-[1900px] mx-auto">
      <div className='lg:w-3/5'>
          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-lg font-normal border ${
                  activeTab === tab ? 'bg-[#EFF6FF] text-black border-none' : 'text-[#0F172A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <hr className='my-8'/>

          {/* Content */}
          <div className="bg-white ">
            {activeTab === 'Description' && (
              <>
                <h2 className="font-semibold text-xl text-[#0F172A] mb-2">Course Description</h2>
                <p className="text-[#334155] text-base font-normal mb-4">
                This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are 
                intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. 
                </p>
                <h2 className="font-semibold text-xl text-[#0F172A] mb-2">Certification</h2>
                <p className="text-[#334155] text-base font-normal mb-4">
                At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful
                completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.
                </p>
              </>
            )}
            {activeTab !== 'Description' && (
              <p className="text-gray-500">{activeTab} content coming soon.</p>
            )}
          </div>
          <hr  className='my-8'/>
      </div>
    </div>
  );
};

export default CourseTabs;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

const syllabusData = [
  {
    title: 'Introduction to UX Design',
    lessons: 5,
    duration: '1 hour',
    content: ['What is UX?', 'History of UX', 'Why UX Matters', 'UX vs UI', 'Career Paths']
  },
  {
    title: 'Basics of User-Centered Design',
    lessons: 5,
    duration: '1 hour',
    content: ['Understanding Users', 'Personas', 'Empathy Mapping', 'User Journeys', 'Accessibility']
  },
  {
    title: 'Elements of User Experience',
    lessons: 5,
    duration: '1 hour',
    content: ['Information Architecture', 'Interaction Design', 'Usability', 'Prototyping', 'Wireframing']
  },
  {
    title: 'Visual Design Principles',
    lessons: 5,
    duration: '1 hour',
    content: ['Typography', 'Color Theory', 'Layouts', 'Visual Hierarchy', 'Design Systems']
  }
];

const InstructorAndSyllabus: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-[90%] max-w-[1900px] mx-auto py-8 text-gray-800">
      <div className=' lg:w-3/5'>
          {/* Instructor */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-[#0F172A]">Instructor</h2>
            <div className="gap-4 mb-8 ">
                <div className='mb-6'>
                    <h3 className="text-[#2563EB] text-xl font-semibold">Ronald Richards</h3>
                    <p className="text-base text-[#334155] font-normal">UI/UX Designer</p>
                </div>
                <div className='sm:flex gap-4'>
                    <img src="/assets/icons/model-3.svg" alt="Instructor" className="w-28 h-28 rounded-full object-cover" />
                    <div className="flex flex-col gap-4 mt-2 text-sm text-gray-500">
                        <span className='flex text-base font-normal text-[#0F172A] gap-1 items-center'><img src="/assets/icons/award.svg" alt="" /> 40,445 Reviews</span>
                        <span className='flex text-base font-normal text-[#0F172A] gap-1 items-center'><img src="/assets/icons/graduation.svg" alt="" /> 500 Students</span>
                        <span className='flex text-base font-normal text-[#0F172A] gap-1 items-center'><img src="/assets/icons/play.svg" alt="" /> 15 Courses</span>
                    </div>
                </div>
            </div>
            <p className="mt-4 font-normal text-base text-[#334155]">
            With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric 
            interfaces for renowned tech companies, ensuring seamless and engaging user experiences.
            </p>
          </div>
          <hr className='my-8'/>

          {/* Syllabus */}
          <div>
            <h2 className="text-xl font-semibold text-[#0F172A] mb-4">Syllabus</h2>
            <div className="bg-white border rounded-lg divide-y w-full lg:w-11/12">
              {syllabusData.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex justify-between items-center p-6 hover:bg-gray-50"
                  >
                  <div className='flex sm:items-center gap-4'>
                    {activeIndex === index ? (
                        <ChevronUp className="w-5 h-5  text-black-500" />
                        ) : (
                        <ChevronDown className="w-5 h-5 text-black-500" />
                        )}
                        <p className="sm:text-xl font-semibold text-[#0F172A]">{item.title}</p>
                  </div>
                    <div className="text-left flex justify-between">
                      
                      <p className="hidden sm:inline-block text-sm text-gray-500">{item.lessons} Lessons · {item.duration}</p>
                    </div>
                  </button>
                  {activeIndex === index && (
                    <ul className="px-6 pb-4 text-base text-black-600 space-y-1">
                      {item.content.map((lesson, i) => (
                        <li key={i}>• {lesson}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
          <hr className='my-8 w-full'/>
      </div>
    </div>
  );
};

export default InstructorAndSyllabus;

import React, { useState } from 'react';

type Instructor = {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  students: number;
};

const baseInstructors: Instructor[] = [
  {
    id: '1',
    name: 'Ronald Richards',
    title: 'UI/UX Designer',
    image: '/instructors/ronald.png', 
    rating: 4.9,
    students: 2400,
  },
  {
    id: '2',
    name: 'Ronald Richards',
    title: 'UI/UX Designer',
    image: '/instructors/ronald.png',
    rating: 4.9,
    students: 2400,
  },
  {
    id: '3',
    name: 'Ronald Richards',
    title: 'UI/UX Designer',
    image: '/instructors/ronald.png',
    rating: 4.9,
    students: 2400,
  },
  {
    id: '4',
    name: 'Ronald Richards',
    title: 'UI/UX Designer',
    image: '/instructors/ronald.png',
    rating: 4.9,
    students: 2400,
  },
  {
    id: '5',
    name: 'Ronald Richards',
    title: 'UI/UX Designer',
    image: '/instructors/ronald.png',
    rating: 4.9,
    students: 2400,
  },
];

const TopInstructors: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedInstructors = showAll
    ? [...baseInstructors, ...baseInstructors.map((ins, idx) => ({ ...ins, id: `${ins.id}-copy-${idx}` }))]
    : baseInstructors;

  return (
    <div className="w-[90%] max-w-[1900px] mx-auto my-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-[#0F172A]">Top Instructors</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-blue-500 hover:underline"
        >
          {showAll ? 'See Less' : 'See All'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-12">
        {displayedInstructors.map((ins) => (
          <div
            key={ins.id}
            onClick={() => alert(`Clicked on ${ins.name}`)}
            className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden py-8 px-4 text-center"
          >
            <div className="w-4/5 h-3/5 mx-auto mb-4">
              <img
                src={ins.image}
                alt={ins.name}
                className="w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-blue-500 transition"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#0F172A]">{ins.name}</h3>
            <p className="text-sm font-normal text-[#334155]">{ins.title}</p>
            <hr className="my-4" />
            <div className="flex justify-center items-center gap-2 mt-2 text-sm text-[#475569]">
              <span className="text-[#0F172A] font-semibold text-xs">⭐ {ins.rating}</span>
              <span></span>
              <span className="text-xs text-[#334155] font-semibold">{ins.students} Students</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;

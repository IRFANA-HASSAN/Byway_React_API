import React, { useState } from "react";

type Category = {
    id: string;
    name: string;
    courses: number;
    icon: string; 
  };
  
  const categories: Category[] = [
    { id: "1", name: "Astrology", courses: 11, icon: "/assets/icons/Astrology.svg" },
    { id: "2", name: "Development", courses: 12, icon: "/assets/icons/Development.svg" },
    { id: "3", name: "Marketing", courses: 12, icon: "/assets/icons/Marketing.svg" },
    { id: "4", name: "Physics", courses: 14, icon: "/assets/icons/Physics.svg" },
  ];
  

const TopCategories: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  // Clone the categories and assign unique IDs for the repeated row
  const repeatedCategories = categories.map((cat, index) => ({
    ...cat,
    id: `r${index + 1}`,
  }));

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="w-[90%] max-w-[1900px] mx-auto my-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-[#0F172A]">Top Categories</h2>
        <button
          onClick={toggleExpanded}
          className="text-sm text-blue-500 hover:underline"
        >
          {expanded ? "See Less" : "See All"}
        </button>
      </div>

      {/* Render Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {categories.map((cat) => (
            <div
                key={cat.id}
                onClick={() => alert(`Clicked on ${cat.name}`)}
                className="bg-white border border-gray-300 shadow-[0_0_8px_0_#3B82F61F] rounded-lg py-14 flex flex-col items-center text-center"
            >
                <div className="bg-[#E0F2FE] w-24 h-24 rounded-full flex items-center justify-center mb-2">
                  <img src={cat.icon} alt={cat.name} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-semibold text-xl text-[#0F172A]">{cat.name}</h3>
                <p className="text-base font-normal text-[#334155]">{cat.courses} Courses</p>
            </div>
        ))}



        {expanded &&
          repeatedCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-gray-300 shadow-[0_0_8px_0_#3B82F61F] rounded-lg py-14 flex flex-col items-center text-center cursor-pointer"
              onClick={() => alert(`Clicked on ${cat.name}`)}
            >
              <div className="bg-[#E0F2FE] w-24 h-24 rounded-full flex items-center justify-center mb-2">
                <img src={cat.icon} alt={cat.name} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="font-semibold text-xl text-[#0F172A]">{cat.name}</h3>
              <p className="text-base font-normal text-[#334155]">{cat.courses} Courses</p>
            </div>
          ))}

      </div>
    </div>
  );
};

export default TopCategories;

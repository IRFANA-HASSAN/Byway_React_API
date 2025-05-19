import React from "react";

const InstructorSection: React.FC = () => {
  return (
    <div className="w-[90%] max-w-[1900px]  mx-auto px-4 py-16 gap-16 items-center ">
      {/* Become an Instructor */}
      <div className="flex flex-col sm:flex-row items-around">
        <div className="">
          <img
            src="/assets/model-1.jpg"
            alt="Instructor"
            className="w-full h-full object-cover "
          />
        </div>
        <div className=" sm:text-left m-auto">
          <h3 className="text-2xl text-black font-semibold mb-2">Become an Instructor</h3>
          <p className="text-[#1D2939] mb-4 max-w-md text-base font-normal">
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </p>
          <button onClick={() => alert('This is a dummy action.')} className="bg-black text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition flex  gap-2">
            Start Your Instructor Journey
            <span aria-hidden="true"><img src="/assets/icons/arrow-narrow-right.svg" alt="arrow" className="flex justify-center items-center"/></span>
          </button>
        </div>
      </div>

      {/* Transform Your Life */}
      <div className="flex flex-col sm:flex-row-reverse items-around ">
        <div className=" p-2 ">
          <img
            src="/assets/model-2.jpg"
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" sm:text-left m-auto">
          <h3 className="text-2xl text-black font-semibold mb-2">
            Transform your life through education
          </h3>
          <p className="text-[#1D2939] mb-4 max-w-lg text-base font-normal">
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <button onClick={() => alert('This is a dummy action.')} className="bg-black text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800 transition flex  gap-2">
            Checkout Courses
            <span aria-hidden="true"><img src="/assets/icons/arrow-narrow-right.svg" alt="arrow" className="flex justify-center items-center"/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;

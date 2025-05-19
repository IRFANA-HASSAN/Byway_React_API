
import NavBar from '../components/Navbar.tsx';
import TopCategories from '../components/TopCategories.tsx';
import TopCourses from '../components/TopCourses.tsx';
import TopInstructors from '../components/TopInstructors.tsx';
import Testimonials  from '../components/Testimonials.tsx';
import InstructorSection from "../components/InstructorSection.tsx";


const Home = () => {
  return (
    <>
      <main className="">
        <NavBar />
        <section className="flex justify-between items-center  w-[90%] max-w-[1900px] mx-auto" >
          <div className='my-28 xl:my-6'>
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">Unlock Your Potential <br /> with Byway</h1>
            <p className="text-[#334155] font-normal text-sm sm:text-base mb-6 sm:w-9/12">
              Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth,
              and we're here to guide you on your journey to success.
            </p>
            <button onClick={() => alert('This is a dummy action.')} className='text-sm font-medium text-white bg-[#3B82F6] px-6 py-4 rounded-lg font-inter'>Start your instructor journey</button>
          </div>
          {/* <div className="bg-[url('/assets/Hero.png')] bg-no-repeat bg-contain bg-right lg:min-h-[800px] lg:w-[1000px]  hidden md:inline-block"></div> */}
          <div className="hidden md:inline-block md:h-[500px] md:w-full lg:h-[800px] lg:w-[1000px] bg-[url('/assets/Hero.png')] bg-no-repeat bg-contain bg-right"></div>

        </section>

        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 text-center bg-[#F8FAFC] py-12">
          <div>
            <p className="text-3xl font-semibold text-[#0F172A]">250+</p>
            <p className="tm-sm font-normal text-[#0F172A]">Courses by our best mentors</p>
          </div>
          <div className="border-x-4 h-16">
            <p className="text-3xl font-semibold text-[#0F172A] ">1000+</p>
            <p className="tm-sm font-normal text-[#0F172A]">Courses by our best mentors</p>
          </div>
          <div className="border-r-4">
            <p className="text-3xl font-semibold text-[#0F172A]">15+</p>
            <p className="tm-sm font-normal text-[#0F172A]">Courses by our best mentors</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[#0F172A]">2400+</p>
            <p className="tm-sm font-normal text-[#0F172A]">Courses by our best mentors</p>
          </div>
        </section>
      </main>
      <TopCategories/>
      <TopCourses  title="Top Courses" />
      <TopInstructors />
      <Testimonials />
      <InstructorSection />
    </>
  )
}

export default Home

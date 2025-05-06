

const Navbar = () => {
  return (
    <header className=" py-4 border-b">
        <nav className="flex justify-between items-center  w-[90%] max-w-[1900px] mx-auto">
          <div className="flex justify-center items-center space-x-2">
            <img src="/assets/logo.svg" alt="Byway Logo" />
            <span className="text-base  font-inter"><a href="/" className='text-xl'>Byway</a></span>
          </div> 
          <div className="flex justify-center gap-4 items-center">
            <a href="#"><img src="/assets/icons/heart.svg" alt="heart" className="h-8 w-8 hidden sm:inline-block" /></a>
            <a href="#"><img src="/assets/icons/cart.svg" alt="cart" className="h-8 w-8 hidden sm:inline-block" /></a>
            <a href="#"><img src="/assets/icons/bell.svg" alt="notification" className="h-8 w-8 hidden sm:inline-block" /></a>
            <button  onClick={() => alert(`Profile page`)} className="w-12 h-12 rounded-full bg-gray-700 text-white text-lg font-medium flex items-center justify-center">J</button>
          </div>
        </nav>
    </header>
  );
};

export default Navbar;
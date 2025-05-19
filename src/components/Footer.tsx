import { useState } from 'react';

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  
  // Footer links data
  const footerLinks = {
    getHelp: [
      { name: 'Contact Us', href: '#' },
      { name: 'Latest Articles', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    programs: [
      { name: 'Art & Design', href: '#' },
      { name: 'Business', href: '#' },
      { name: 'IT & Software', href: '#' },
      { name: 'Languages', href: '#' },
      { name: 'Programming', href: '#' },
    ]
  };
  
  // Contact info
  const contactInfo = {
    address: '123 Main Street, Anytown, CA 12345',
    tel: '(123) 456-7890',
    email: 'byway@contact.in'
  };
  
  // Social media icons 
  const socialIcons = [
    { 
        name: 'facebook', 
        grayscaleIcon: '/assets/icons/facebook.svg',
        colorIcon: '/assets/icons/Facebook.svg',
        alt: 'Facebook'
    },
    { 
        name: 'github', 
        grayscaleIcon: '/assets/icons/github.svg',
        colorIcon: '/assets/icons/GitHub.svg',
        alt: 'GitHub'
    },
    { 
        name: 'google', 
        grayscaleIcon: '/assets/icons/google.svg',
        colorIcon: '/assets/icons/Google.svg',
        alt: 'Google'
    },
    { 
        name: 'twitter', 
        grayscaleIcon: '/assets/icons/twitter.svg',
        colorIcon: '/assets/icons/Twitter.svg',
        alt: 'Twitter'
    },
    { 
        name: 'microsoft', 
        grayscaleIcon: '/assets/icons/microsoft.svg',
        colorIcon: '/assets/icons/Microsoft.svg',
        alt: 'microsoft'
    },
  ];

  return (
    <footer className="w-full bg-[#1E293B] text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {/* Logo and description */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="w-6 h-6 "><img src="/assets/logo.svg" alt="logo" /></div>
              <span className="ml-2 text-xl font-bold "><a href="#" className='flex items-center justify-center'>Byway</a></span>
            </div>
            <p className="text-sm font-normal text-[#CBD5E1]">
              Empowering learners through accessible and engaging online education.
            </p>
            <p className="text-sm font-normal text-[#CBD5E1]">
              Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.
            </p>
          </div>
          
          {/* Get Help section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F1F5F9]">Get Help</h3>
            <ul className="space-y-2">
              {footerLinks.getHelp.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-[#CBD5E1] hover:text-blue-400 hover:underline transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Programs section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F1F5F9]">Programs</h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-[#CBD5E1] hover:text-blue-400 hover:underline transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Us section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#F1F5F9]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm font-medium text-[#CBD5E1]">
                Address: {contactInfo.address}
              </li>
              <li className="text-sm font-medium text-[#CBD5E1]">
                Tel:  <a 
                  href="#"
                  className="hover:text-blue-400 hover:underline transition-colors duration-200"
                >
                  {contactInfo.tel}
                </a>
              </li>
              <li className="text-sm font-medium text-[#CBD5E1]">
                Email:<a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-400 hover:underline transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
            
            {/* Social media icons */}
            <div className="flex mt-4 space-x-4">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="transition-all duration-200  bg-white rounded-full p-2"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <img 
                    src={hoveredIcon === social.name ? social.colorIcon : social.grayscaleIcon} 
                    alt={social.alt}
                    className="w-8 h-8" 
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
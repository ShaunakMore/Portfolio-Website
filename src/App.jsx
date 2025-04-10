import { useState } from "react";
import FadeInSection from "./FadeInSection";
import './App.css'
import Timeline from "./TimelineComponent";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";
import Contact from "./ContactForm";  
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

function App() {
  const [active, setActive] = useState('Home');
  const navItems = ['Home', 'About', '• Shaunak More •', 'Projects', 'Contact'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black text-white lg:hidden" 
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
      </button>
      
      {/* Desktop Navigation */}
      <ul className="Navbar-list hidden lg:flex space-x-6 items-center z-50">
        {navItems.map((item) => {
          const isTitle = item === '• Shaunak More •';
          return (
            <li
              key={item}
              className={` 
                ${isTitle ? 'text-[25px] font-black font-poppins ' : 'cursor-pointer px-3 py-1 rounded transition duration-200'}
              `}
            >
              {isTitle ? (
                item
              ) : (
                <Link
                  to={item}
                  spy={true}
                  offset={-30}
                  duration={1000}
                  activeClass="text-orange-500 underline underline-offset-2"
                  className="block transition-colors duration-100 ease-in-out hover:text-orange-500"
                  onClick={() => setActive(item)}
                >
                  {item}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center lg:hidden">
          <ul className="flex flex-col items-center space-y-6">
            {navItems.map((item) => {
              const isTitle = item === '• Shaunak More •';
              return (
                <li
                  key={item}
                  className={`text-white ${isTitle ? 'text-[22px] font-black font-poppins' : 'cursor-pointer px-3 py-1 rounded transition duration-200'}`}
                >
                  {isTitle ? (
                    item
                  ) : (
                    <Link
                      to={item}
                      spy={true}
                      offset={-30}
                      duration={1000}
                      activeClass="text-orange-500 underline underline-offset-2"
                      className="block transition-colors duration-100 ease-in-out hover:text-orange-500"
                      onClick={() => {
                        setActive(item);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      
      <div id="Home" className="Intro pt-20 px-4 md:px-8 lg:px-20">
        <div className="Intro-image w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full border-4 border-orange-500 overflow-hidden mx-auto">
          <img src="./src/assets/Profile Photo.png" alt="Shaunak More" className="w-full h-full object-cover object-[55%_25%]"/>
        </div>
        <div className="Intro-text">
          <h3 className='text-gray-500 text-base md:text-lg'> Hello 👋, My name is Shaunak Sanjay More and I'm a </h3>
          <h1 className='text-black text-3xl md:text-4xl lg:text-6xl font-bold'> Software Developer</h1>
          <h3 className='text-gray-500 text-sm md:text-base lg:text-lg'> I turn coffee into code and ideas into software. Every new project is a new adventure for me - sometimes sleek, sometimes scrappy - but always built with dedication and late night debugging marathons</h3>
        </div>
        <div className="Intro-buttons flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full mt-6">
          <a href="https://www.github.com/ShaunakMore" target="_blank" rel="noopener noreferrer" className='bg-orange-500 text-white px-6 py-3 rounded-full border-transparent border-[3px] hover:bg-white hover:text-orange-500 hover:border-[3px] hover:border-orange-500 transition duration-200 text-center'>My Projects</a>
          <a href="./public/Shaunak_More_Resume.pdf" download="Shaunak_More_Resume.pdf" className='bg-orange-500 text-white px-6 py-3 rounded-full border-transparent border-[3px] hover:bg-white hover:text-orange-500 hover:border-[3px] hover:border-orange-500 transition duration-300 text-center'>Download Resume</a>
          <Link to="Contact" className='bg-white text-orange-500 border-[3px] cursor-pointer border-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white hover:border-transparent hover:border-[3px] transition duration-300 text-center'>Email me</Link>
        </div>
        <SocialLinks/>
      </div>
      
      <div id="About" className="About-me min-h-screen bg-white bg-[length:200px_200px] bg-[linear-gradient(to_right,#2c2828_0.5px,transparent_0.5px),linear-gradient(to_bottom,#2c2828_0.5px,transparent_0.5px)] px-4 md:px-8">
        <h1 className='text-3xl md:text-4xl lg:text-5xl pt-20 text-white text-center'>About Me</h1>
        <div className='About-me-text grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          <FadeInSection>
            <div className='text-lg md:text-xl lg:text-2xl text-gray-400 p-3'> I'm a passionate software developer with a knack for problem-solving and a love for creating innovative solutions. My journey in the tech world has been fueled by curiosity and a desire to make a difference through code. </div>
          </FadeInSection> 
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <FadeInSection>
            <div className='text-lg md:text-xl lg:text-2xl text-gray-400 p-3'> I thrive on challenges and enjoy tackling complex problems head-on. Whether it's building a web application from scratch or optimizing existing code, I'm always eager to learn and grow as a developer. </div>
          </FadeInSection>    
        </div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-white text-center mt-12'>My Achievements</h1>
        <FadeInSection>
          <Timeline/>
        </FadeInSection>
      </div>

      <div id="Projects" className="Projects px-4 md:px-8">
        <h1 className='text-3xl md:text-4xl lg:text-5xl pt-20 text-black text-center'>Projects</h1>
        <div className='Projects-cards grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8 max-w-6xl mx-auto'>
          <FadeInSection>
            <a href="https://github.com/ShaunakMore/Sync-Jam" className="cursor-pointer block">
              <div className='sync-jam group p-4'>
                <div className="sync-jam-image m-4 overflow-hidden w-full backdrop-blur-md bg-black/30 border border-white/20 rounded-xl shadow-xl p-2 md:p-4">
                  <img className="w-full h-[200px] md:h-[250px] object-cover translate-x-3 translate-y-6 rotate-[-9deg] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 transition duration-300" src="./src/assets/Sync-Jam-Room.png" alt="Sync Jam"/>
                </div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-black font-bold mt-4'>Sync Jam</h1>
                <h3 className='text-gray-500 text-sm md:text-base'>A web application which allows users to listen to music together with real time sync by creating rooms. No login required 😉. Just share the room link and enjoy music together with your friends or partners 🎉 </h3>
                <h3 className="text-gray-500 text-lg mt-2">Tech Stack:</h3>
                <h3 className="text-gray-500 text-sm">Front End: React + Tailwind</h3>
                <h3 className="text-gray-500 text-sm">Database: Firebase</h3>
                <h3 className="text-gray-500 text-sm">Back End: Node.js + Express + Socket.io</h3>
              </div>
            </a>
          </FadeInSection>
          <FadeInSection>
            <a href="https://github.com/ShaunakMore/PharmCity" className="cursor-pointer block">
              <div className="pharm-city p-4 group" >
                <div className="pharm-city-image m-4 overflow-hidden w-full backdrop-blur-md bg-black/30 border border-white/20 rounded-xl shadow-xl p-2 md:p-4">
                  <img className="w-full h-[200px] md:h-[250px] object-cover translate-x-3 translate-y-6 rotate-[-9deg] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 transition duration-300" src="./src/assets/Pharm-City.png" alt="Pharm City"/>
                </div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-black font-bold mt-4'>Pharm City</h1>
                <h3 className='text-gray-500 text-sm md:text-base'>A web application that provides a platform for users to find medicine availibility status in the pharmacies in their city. Need some medicine but don't know which pharmacy has it in stock? PharmCity has your back 💪. PharmCity also allows admin login which can be used as to keep track of medicine stocks in your pharmacies 💊.</h3>
                <h3 className="text-gray-500 text-lg mt-2">Tech Stack:</h3>
                <h3 className="text-gray-500 text-sm">Front End: EJS + Vanilla CSS</h3>
                <h3 className="text-gray-500 text-sm">Database: SQL</h3>
                <h3 className="text-gray-500 text-sm">Back End: Node.js + Express</h3>
              </div>
            </a>
          </FadeInSection>
        </div>
      </div>
      
      <div id="Contact" className="Contact min-h-screen bg-white bg-[length:200px_200px] bg-[linear-gradient(to_right,#2c2828_0.5px,transparent_0.5px),linear-gradient(to_bottom,#2c2828_0.5px,transparent_0.5px)] px-4 md:px-8">
        <h1 className='text-3xl md:text-4xl lg:text-5xl pt-20 text-white text-center'>Contact Me</h1>
        <div className="contact-content flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 mt-8">
          <FadeInSection>
            <Contact/>
          </FadeInSection>
          
          <FadeInSection>
            <div className="text-gray-500 w-full max-w-lg">
              <h3 className="text-xl md:text-2xl">Contact me for questions, conversation, or just saying hello. Thank you for stopping by here</h3>
              <h3 className="text-lg mt-4">Mobile No.- 7972285941</h3>
              <h3 className="text-lg">Email- shaunaksmore999@gmail.com</h3>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/ShaunakMore" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-3xl hover:text-orange-500 transition-colors duration-300" />
                </a>
                <a href="https://linkedin.com/in/shaunak-more-37171a285" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-3xl hover:text-orange-500 transition-colors duration-300" />
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>     
      </div>
    </div>
  )
}

export default App
import { useEffect } from 'react'
import githubLogo from './assets/github.svg'
import linkedinLogo from './assets/linkedin.png'
import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  useEffect(() => {
    // Only run once on mount
    const fetchData = async () => {
      try {
        await fetch("http://localhost:8080/hi");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array to run only once

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white text-neutral-800 shadow z-10">
        {/* Navigation */}
        <nav className="px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left side - Navigation links */}
            <div className="w-1/4 flex items-center gap-4">
              <Link to="/" className="hover:text-blue-600 transition-colors">My Portfolio</Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">About/Contact</Link>
            </div>

            {/* Center - Name with gradient text effect */}
            <div className="w-2/4 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
                MY NAME
              </h1>
            </div>

            {/* Right side - Logo icons */}
            <div className="w-1/4 flex items-center justify-end">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <img src={githubLogo} className="logo" alt="Github logo" />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
              </a>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="pt-28 px-4 flex-grow">
        <p className="max-w-2xl mx-auto my-6 text-gray-700">
          Hello! I am currently a Junior Computer Science and Applied Math Major. This is my portfolio 
          to display my previous projects, experiences, positions, and interests. In my free time I like 
          to read, go to the gym, play video games, and more.
          <br></br>
          This is only a template site so people can understand Tailwind, React, Vite, and Deployment. Check my personal implementation here, and a more visual/responsive site here.
        </p>

        <Outlet />
      </main>
      
      <footer className="mt-8 py-4 bg-gray-100 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Lucas Liona. All rights reserved.
      </footer>
    </div>
  )
}

export default App
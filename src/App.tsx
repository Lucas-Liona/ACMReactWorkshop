import { useEffect, useState } from 'react'
import githubLogo from './assets/github.svg'
import linkedinLogo from  './assets/linkedin.png'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("http://localhost:8080/hi");
  });

  return (
    <>
      <div className = "flex flex-col justify-between">

        <header className = "fixed top-0 left-0 w-full py-3 px-0 text-left font-normal leading-6 text-neutral-800 shadow ">
          <nav className="bg-white px-3 sm:px-4">
            <div className = "container mx-auto flex flex-wrap items-center justify-between">
              <a className = "flex items-center gap-4">
              <Link to="/">My Portfolio</Link>
              <Link to="/about">About/Contact</Link>
              </a>

              <a className = "flex items-center">
                <a href="https://github.com" target="_blank">
                  <img src={githubLogo} className="logo" alt="Github logo" />
                </a>

                <a href="https://linkedin.com" target="_blank">
                  <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
                </a>
              </a>
            </div>
          </nav>
        </header>
     
        
        <main className="pt-16">
        <h1 className="pt-4 relative left-0 w-max text-9xl bg-[url(https://images.fineartamerica.com/images-medium-large/extended-family-photo-collage-maureen-e-ritter.jpg)] bg-cover bg-clip-text text-5xl font-bold text-transparent">LUCAS LIONA</h1>
        <p>Hello! I am currently a Junior Computer Science and Applied Math Major, this is my portfolio to display my previous projects, experiences, positions, and interests. In my free time I like to read, go to the gym, play video games, etc.</p>

        <Outlet />
        
        </main>
        
        
      </div>
    </>
  )
}


export default App

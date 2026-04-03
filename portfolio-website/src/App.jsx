import { useState, useEffect } from 'react'

const FULL_NAME = 'Colin Lou'
const HEADING = 'CS @ SJSU'

function App() {
  const [nameDisplayed, setNameDisplayed] = useState('')
  const [headingDisplayed, setHeadingDisplayed] = useState('');

  // animation effect
  useEffect(() => {
    let i = 0;
    const interval1 = setInterval(() => {
      setNameDisplayed(FULL_NAME.slice(0, i + 1));
      i++;
      if (i === FULL_NAME.length) {
        clearInterval(interval1);

        // start the second animation after first finishes
        let j = 0;
        const interval2 = setInterval(() => {
          setHeadingDisplayed(HEADING.slice(0, j + 1));
          j++;
          if (j === HEADING.length) clearInterval(interval2);
        }, 100);

      }
    }, 100);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-500 font-mono px-6 py-16 max-w-2xl mx-auto text-center">

      {/* Nav */}
      <nav className="flex justify-between items-center mb-24 text-sm">
        <span className="text-neutral-900 font-medium">colin lou</span>
        <ul className="flex gap-6 text-neutral-600">
          <li><a href="#about" className="hover:text-neutral-900 transition-colors">about</a></li>
          <li><a href="mailto:cjlou45@icloud.com" className="hover:text-neutral-900 transition-colors">contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="mb-12">
        {/* Profile Picture*/}
        <div className="w-48 h-48 rounded-full bg-neutral-200 mx-auto mb-8 flex items-center justify-center text-neutral-400 text-xl">
          CL
        </div>
        <h1 className="text-5xl font-bold text-neutral-900 leading-tight min-h-[1.2em]">
          {nameDisplayed}<span className="animate-pulse">|</span>
        </h1>
        <h2 className="text-2xl text-neutral-400 leading-tight mb-6 min-h-[1.2em]">
          {headingDisplayed}
        </h2>
      </section>

      {/* About */}
      <section id="about">
        <p className="text-xs text-neutral-900 mb-6 tracking-widest">about</p>
        <p className="text-base text-neutral-500 leading-relaxed max-w-md mx-auto mb-4">
          Hi I'm Colin Lou, a Computer Science student at San Jose State University.
          Since a kid, I've loved computers, how they work, and the cool programs they run.
          Nowadays, I have a strong interest in backend software engineering and low level systems, though I'm open to any opportunities!
        </p>
        <p className="text-base leading-relaxed max-w-md mx-auto text-neutral-500">
          When I'm not programming, I love to hangout with friends,
          build computers, buy things on FB Marketplace, cook, 
          try new food spots, explore the outdoors, and listen to music.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mt-16">
        <p className="text-xs text-neutral-900 mb-8 tracking-widest">experience</p>
        <ul className="flex flex-col gap-8 text-left max-w-md mx-auto">

          <li className="flex gap-4">
            <div className="w-12 h-12 rounded-md bg-neutral-200 shrink-0 mt-1" />
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="text-neutral-900 font-medium">Undergraduate Researcher</span>
                <span className="text-xs text-neutral-400 shrink-0 ml-4">Sep 2025 — Present</span>
              </div>
              <p className="text-sm text-neutral-500 mb-2">SJSU Undergraduate Research Opportunity Program</p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Creating a messaging tool for a distributed system giving internet utilities to disconnected devices
              </p>
            </div>
          </li>

          <li className="flex gap-4 border-t border-neutral-100 pt-8">
            <div className="w-12 h-12 rounded-md bg-neutral-200 shrink-0 mt-1" />
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="text-neutral-900 font-medium">Software Engineering Intern</span>
                <span className="text-xs text-neutral-400 shrink-0 ml-4">Jun 2025 — Aug 2025</span>
              </div>
              <p className="text-sm text-neutral-500 mb-2">SJSU Software & Computer Engineering Society</p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Created full-stack web features for a club website accessed by 300+ members and 20+ officers.
              </p>
            </div>
          </li>

        </ul>
      </section>

      {/* Links */}
      <footer className="mt-24 flex justify-center gap-6">
        <a href="https://github.com/Funsize1234" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 transition-colors" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/colin-lou" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 transition-colors" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </footer>

    </div>
  )
}

export default App

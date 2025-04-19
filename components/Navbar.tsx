'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme(isDark ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-black/70 shadow-sm">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4 text-sm">
        <Link href="/" className="font-bold text-lg">Sachin Kasana</Link>
        <div className="flex items-center gap-6">
          <Link href={isHome ? '#about' : '/#about'} className="hover:underline">About</Link>
          <Link href={isHome ? '#projects' : '/#projects'} className="hover:underline">Projects</Link>
          <Link href={isHome ? '#blog' : '/#blog'} className="hover:underline">Blog</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href={isHome ? '#contact' : '/#contact'} className="hover:underline">Contact</Link>
          <Link href="/tools/json-prettifier" className="hover:underline">JSON Prettifier</Link>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
}

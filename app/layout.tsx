import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sachin Kasana – Principal Engineer | Node.js | React | AI',
  description:
    'Software engineer with 12+ years of experience building scalable applications. Principal Engineer at Wood Mackenzie. Explore blogs, resume, and projects.',
  metadataBase: new URL('https://sachinkasana-dev.vercel.app'),
  openGraph: {
    title: 'Sachin Kasana – Principal Engineer',
    description:
      'Explore the personal website and blog of Sachin Kasana, Principal Engineer at Wood Mackenzie. Focused on Node.js, AI, performance & scalable web apps.',
    url: 'https://sachinkasana-dev.vercel.app/',
    siteName: 'Sachin Kasana',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="8vtWTaRmZ99VNeEg14rA299KcPo0M6ZQcNjnMAHk7B0" />
  {/* ✅ Google Analytics */}
  <Script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-PX68H18QSK"
  />
  <Script id="gtag-init" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-PX68H18QSK');
    `}
  </Script>

  {/* ✅ Canonical & Meta */}
  <link
    rel="canonical"
    href="https://sachinkasana-tau.vercel.app"
  />
  {/* Global OG tags */}
<meta property="og:title" content="Sachin Kasana – Principal Engineer & Dev Tool Creator" />
<meta property="og:description" content="Explore dev tools, clean code blogs, and system design insights from Sachin Kasana." />
<meta property="og:image" content="https://sachinkasana-dev.vercel.app/og-default.png" />
<meta property="og:url" content="https://sachinkasana-dev.vercel.app" />
<meta property="og:type" content="website" />

{/* Twitter Cards */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sachin Kasana – Fullstack Engineer & Dev Blogger" />
<meta name="twitter:description" content="Personal dev toolkit + blog: JSON Prettifier, Regex Tester, and clean code insights." />
<meta name="twitter:image" content="https://sachinkasana-dev.vercel.app/og-default.png" />
  <meta property="og:image" content="https://sachinkasana-tau.vercel.app/og-default.png" />
</head>

      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
      <Script id="structured-data-homepage" type="application/ld+json" strategy="afterInteractive">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sachin Kasana",
    "jobTitle": "Principal Engineer",
    "url": "https://sachinkasana-dev.vercel.app",
    "description": "Principal Engineer specializing in scalable web architecture using Node.js, React, and AI tools.",
    "sameAs": [
      "https://github.com/sachinkasana",
      "https://www.linkedin.com/in/sachin-kasana",
      "https://sachinkasana-dev.vercel.app",
      "https://medium.com/@sachinkasana"
    ]
  })}
</Script>

        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

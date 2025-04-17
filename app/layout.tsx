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
  metadataBase: new URL('https://yourdomain.com'), // ✅ Update with your actual domain
  openGraph: {
    title: 'Sachin Kasana – Principal Engineer',
    description:
      'Explore the personal website and blog of Sachin Kasana, Principal Engineer at Wood Mackenzie. Focused on Node.js, AI, performance & scalable web apps.',
    url: 'https://yourdomain.com',
    siteName: 'Sachin Kasana',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </head>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

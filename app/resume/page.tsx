import Script from 'next/script';

export const metadata = {
  title: "Sachin Kasana – Resume | Principal Engineer & Software Architect",
  description:
    "Explore Sachin Kasana’s professional resume – 12+ years of experience in Node.js, React, AWS, and system design. Currently Principal Engineer at Wood Mackenzie.",
  keywords: [
    "Sachin Kasana resume",
    "Principal Engineer",
    "Software Architect",
    "Fullstack Developer",
    "Node.js Resume",
    "React Resume",
    "AWS Resume",
  ],
  openGraph: {
    title: "Sachin Kasana – Resume",
    description:
      "Professional resume of Sachin Kasana, Principal Engineer & Software Architect with 12+ years of experience.",
    url: "https://sachinkasana-dev.vercel.app/resume",
    siteName: "Sachin Kasana",
    type: "profile",
  },
};

  
  export default function ResumePage() {
    return (
      <>
      <Script id="resume-schema" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Resume of Sachin Kasana",
    description: "Principal Engineer with 12+ years of experience in Node.js, React, AWS, and scalable system design.",
    url: "https://sachinkasana-dev.vercel.app/resume",
    author: {
      "@type": "Person",
      name: "Sachin Kasana"
    },
    dateModified: "2024-12-01"
  })}
</Script>
<main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">My Resume</h1>
  
        <div className="rounded-md overflow-hidden border shadow-md">
          <iframe
            src="/sachin-kasana-resume.pdf"
            title="Sachin Kasana Resume"
            width="100%"
            height="1000"
            className="w-full"
          />
        </div>
  
        <div className="mt-6 text-center">
          <a
            href="/sachin-kasana-resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            📥 Download Resume
          </a>
        </div>
      </main>
      </>
      
    );
  }
  
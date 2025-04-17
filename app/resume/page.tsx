export const metadata = {
    title: 'Sachin Kasana – Resume',
    description: 'View and download the resume of Sachin Kasana, Principal Engineer with 12+ years of experience in scalable architecture and web engineering.',
  };
  
  export default function ResumePage() {
    return (
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
    );
  }
  
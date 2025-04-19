import RegexTester from '@/components/RegexTester';

export const metadata = {
  title: "Regex Tester | Try Regex Online Instantly - KasanaCodes",
  description: "Test your regular expressions online with real-time highlighting, match feedback, and error handling. Built by Sachin Kasana.",
  keywords: [
    "Regex Tester", "Online Regex Tool", "Regex Highlighter", "Test Regex",
    "Regex Playground", "KasanaCodes", "Developer Tools"
  ],
  openGraph: {
    title: "Regex Tester | Developer Tool by KasanaCodes",
    description: "Try your regex live with real match feedback and highlight preview. Built for devs by Sachin Kasana.",
    url: "https://sachinkasana-dev.vercel.app/tools/regex-tester",
    siteName: "KasanaCodes",
    type: "website"
  }
};

export default function RegexTesterPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Regex Tester</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Type your regular expression and test string below. Get instant match feedback and preview.
      </p>
      <RegexTester />
    </main>
  );
}

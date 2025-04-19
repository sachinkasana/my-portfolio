import JsonPrettifier from '@/components/JsonPrettifier';

export const metadata = {
    title: "JSON Prettifier | Format & Beautify JSON Instantly - KasanaCodes",
    description: "Online JSON Formatter & Prettifier tool for developers. Cleanly format your raw JSON instantly with copy and download options. Built by Sachin Kasana.",
    keywords: [
      "JSON Prettifier", "JSON Formatter", "Beautify JSON", "Format JSON",
      "Developer Tools", "Online JSON tool", "KasanaCodes"
    ],
    openGraph: {
      title: "JSON Prettifier | Developer Tool by KasanaCodes",
      description: "Paste your raw JSON and format it instantly. Built by Sachin Kasana.",
      url: "https://sachinkasana.dev/tools/json-prettifier",
      siteName: "KasanaCodes",
      type: "website"
    }
  };
  
export default function JsonPrettifierPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">JSON Prettifier</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Paste your raw JSON below and format it instantly.
      </p>
      <JsonPrettifier />
    </main>
  );
}

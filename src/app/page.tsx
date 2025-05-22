export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to StackedCore 🚀</h1>
      <p className="text-lg text-gray-700 mb-6">
        A self-driven platform for mastering modern SoC design.
      </p>

      <ul className="list-disc text-gray-800 pl-6 space-y-2">
        <li>🔧 RTL & Design Verification Labs</li>
        <li>🛡️ Hardware & Embedded Security Toolkits</li>
        <li>📘 Study Roadmaps (Beginner → Architect)</li>
        <li>📊 AI Workload Optimization & Simulation Kits</li>
      </ul>

      <div className="mt-10 space-x-6">
        <a href="/labs" className="text-blue-600 underline">Labs</a>
        <a href="/roadmaps" className="text-blue-600 underline">Roadmaps</a>
        <a href="/toolkits" className="text-blue-600 underline">Toolkits</a>
      </div>

      <p className="mt-6 text-gray-500">
        Built by <strong>Karthikeya Mandava</strong> | Rutgers ECE
      </p>
    </main>
  );
}

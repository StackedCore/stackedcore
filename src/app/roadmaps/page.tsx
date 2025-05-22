export default function RoadmapsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">📘 Study Roadmaps</h1>
      <p className="text-gray-700 mb-4">Beginner to advanced learning paths across SoC domains.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>RTL → DV Pro Roadmap</li>
        <li>Embedded Systems → Secure Architect</li>
        <li>AI Workload Optimization Path</li>
      </ul>
    </main>
  );
}

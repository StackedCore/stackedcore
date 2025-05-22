export default function LabsPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">🔬 Labs</h1>
      <p className="text-gray-700 mb-4">Explore simulation labs built using Verilog, gem5, UVM, and more.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>MESIF Cache Coherency Lab</li>
        <li>UVM-Based DV Starter Testbench</li>
        <li>FPGA Secure Boot Simulation</li>
      </ul>
    </main>
  );
}

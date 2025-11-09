export default function Documentation() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Documentation</h2>
      <div className="space-y-4">
        <a href="/projects/documentation/graduate-research" className="block p-4 border border-gray-200 rounded hover:bg-gray-50">
          <h3 className="text-xl font-semibold">Graduate Research</h3>
          <p>Explore the graduate research section.</p>
        </a>
        <a href="/projects/documentation/graduate-collection" className="block p-4 border border-gray-200 rounded hover:bg-gray-50">
          <h3 className="text-xl font-semibold">Graduate Collection</h3>
          <p>Explore the graduate collection section.</p>
        </a>
      </div>
    </div>
  );
}
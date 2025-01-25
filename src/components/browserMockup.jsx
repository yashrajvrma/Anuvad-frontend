export default function BrowserMockup() {
  return (
    <div className="w-full mx-auto mt-12 overflow-hidden rounded-lg border border-gray-200 shadow-xl bg-white">
      <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="bg-white p-6">
        <div className="h-40 w-full rounded-md bg-gray-100" />
      </div>
    </div>
  );
}

export default function BrowserWindow() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8 overflow-hidden rounded-lg border border-gray-200 shadow-lg">
      <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="bg-white p-4">
        <div className="h-32 w-full rounded-md bg-gray-100" />
      </div>
    </div>
  );
}

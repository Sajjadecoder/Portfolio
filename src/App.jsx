function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind CSS is Working 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          If you can see the styling, colors, spacing, and shadows, Tailwind is
          configured correctly.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
          Test Button
        </button>

        <div className="mt-6 flex justify-center gap-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            Success
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
            Responsive
          </span>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
            Tailwind
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
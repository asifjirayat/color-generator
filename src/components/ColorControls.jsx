export default function ColorControls({ baseColor, step }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Color Input Mock */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text lg font-medium text-gray-700 mb-3">Pick a Color</h3>
        <div className="space-y-3">
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              #
            </span>
            <input
              type="text"
              value={"#3B82F6"}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md bg-gray-100 text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={"#3b82f6"}
              disabled
              className="w-10 h-10 cursor-pointer"
            />
            <span className="text-sm text-gray-600">#3B82F6</span>
          </div>
        </div>
      </div>

      {/* Step Control Mock */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-700 mb-3">
          Step: {step}%
        </h3>
        <input
          type="range"
          min={1}
          max={50}
          value={10}
          disabled
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-not-allowed"
        />
        <p className="text-sm text-gray-500 mt-2">
          Adjust color variation intensity
        </p>
      </div>
    </div>
  );
}

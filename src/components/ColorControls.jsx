import { useEffect, useState } from "react";

export default function ColorControls({
  baseColor,
  onColorChange,
  step,
  onStepChange,
}) {
  //Local state for input, separate from baseColor
  const [inputValue, setInputValue] = useState(
    baseColor.slice(1).toUpperCase()
  );

  useEffect(() => {
    setInputValue(baseColor.slice(1).toUpperCase());
  }, [baseColor]);

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    //Allow only hex characters, max 6
    if (!/^[0-9A-F]*$/.test(value) || value.length > 6) return;

    //Always update local state
    setInputValue(value);

    //Only update baseColor if 6 digits
    if (value.length === 6) {
      onColorChange(`#${value}`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Color Input */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Pick a Color</h3>
        {/* HEX input */}
        <div className="flex mb-3">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            #
          </span>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="FFFFFF"
            maxLength={6}
            className="flex-1 font-mono px-3 py-2 border border-gray-300 rounded-r-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Hex color code"
          />
        </div>
        {/* Color Picker */}
        <div className="flex items-center space-x-2">
          <input
            type="color"
            value={baseColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-10 h-10 cursor-pointer border-none"
            aria-label="Color picker"
          />
          <span className="text-sm text-gray-600 font-mono">
            {baseColor.toUpperCase()}
          </span>
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
          value={step}
          onChange={(e) => onStepChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none"
        />
        <p className="text-sm text-gray-500 mt-2">
          Adjust color variation intensity
        </p>
      </div>
    </div>
  );
}

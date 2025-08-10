import { useState } from "react";

export default function ColorSwatch({ color, label, isBase = false }) {
  const [isCopied, setisCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color.toUpperCase());
      setisCopied(true);
      setTimeout(() => {
        setisCopied(false);
      }, 1500);
      console.log(color + " copied to clipboard");
    } catch (err) {
      console.log("Failed to copy: ", err);
    }
  };

  return (
    <div
      onClick={handleCopy}
      title="Click to copy"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "") {
          handleCopy();
        }
      }}
      className="flex flex-col items-center space-y-1 cursor-pointer group"
    >
      {/* Color Square */}
      <div
        className={`w-16 h-16 border-2 rounded-lg shadow-sm transition-all duration-150 ${
          isBase
            ? "border-gray-400 transform scale-105 ring-4 ring-blue-100"
            : "border-gray-300 hover:scale-105 hover:shadow"
        }`}
        style={{ backgroundColor: color }}
      />

      {/* Hex Code */}
      <div className="text xs font-mono font-medium text-gray-800 text-center px-1.5 py-0.5 rounded border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
        {color.toUpperCase()}
      </div>

      {/* Optional Label */}
      {label && <div className="text-xs text-gray-500 mt-0.5">{label}</div>}
    </div>
  );
}

import { useState } from "react";

export default function ColorSwatch({ color, label, isBase = false, onCopy }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    if (onCopy) {
      onCopy(color);
    }
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCopy();
    } else if (e.key === "") {
      e.preventDefault();
      handleCopy();
    }
  };

  return (
    <div
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      title="Click to copy"
      role="button"
      tabIndex={0}
      className="flex flex-col items-center space-y-1 cursor-pointer group focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-300 focus-visible:rounded "
    >
      {/* Color Square */}
      <div
        className={`w-16 h-16 border-2 rounded-lg shadow-sm transition-all duration-200 
            ${
              isCopied
                ? "ring-4 ring-green-300 border-green-500 scale-95"
                : isBase
                ? "border-gray-400 transform scale-105 ring-4 ring-blue-100 hover:ring-blue-200"
                : "border-gray-300 hover:scale-105 hover:shadow-md hover:border-gray-400"
            }
            `}
        style={{ backgroundColor: color }}
      />

      {/* Hex Code */}
      <div
        className={`text xs font-mono font-medium px-1.5 py-0.5 rounded border shadow-sm transition-all duration-200 ${
          isCopied
            ? "bg-green-100 border-green-300 text-green-800"
            : "bg-white/80 border-gray-200 text-gray-800 group-hover:bh-white"
        }
        `}
      >
        {isCopied ? "Copied!" : color.toUpperCase()}
      </div>

      {/* Optional Label */}
      {label && <div className="text-xs text-gray-500 mt-0.5">{label}</div>}
    </div>
  );
}

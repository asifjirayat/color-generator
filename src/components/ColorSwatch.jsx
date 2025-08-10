export default function ColorSwatch({ color, label, isBase = false }) {
  return (
    <div className="flex flex-col items-center space-y-1">
      {/* Color Square */}
      <div
        className={`w-16 h-16 border-2 rounded-lg shadow-sm transition-all duration-150 ${
          isBase
            ? "border-gray-400 transform scale-105 ring-4 ring-blue-100"
            : "border-gray-300 hover:sclae-105 hover:shadow"
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

import ColorSwatch from "./ColorSwatch.jsx";

export default function ColorPalette({ palette }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Tints */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">✨ Tints</h3>
        <p className="text-sm text-gray-500 mb-4">
          Lighter versions (+lightness)
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {palette.tints.map((color, i) => (
            <ColorSwatch key={i} color={color} label={`+${(i + 1) * 10}%`} />
          ))}
        </div>
      </div>

      {/* Shades */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">🌑 Shades</h3>
        <p className="text-sm text-gray-500 mb-4">
          Darker versions (-lightness)
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {palette.shades.map((color, i) => (
            <ColorSwatch key={i} color={color} label={`-${(i + 1) * 10}%`} />
          ))}
        </div>
      </div>

      {/* Tones */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">🎨 Tones</h3>
        <p className="text-sm text-gray-500 mb-4">
          Muted versions (-saturation)
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {palette.tones.map((color, i) => (
            <ColorSwatch
              key={i}
              color={color}
              label={`sat -${(i + 1) * 10}%`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

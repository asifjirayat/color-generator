import ColorSwatch from "./components/ColorSwatch.jsx";
import ColorControls from "./components/ColorControls.jsx";
import ColorPalette from "./components/ColorPalette.jsx";

export default function App() {
  //Static data
  const baseColor = "#3b82f6";
  const step = 10;

  const palette = {
    base: "#3b82f6",
    tints: ["#5a94f7", "#7aa6f8", "#9ab8f9", "#bbc9fa", "#dcdcfb"],
    shades: ["#2a5ea3", "#1f4777", "#142f4b", "#0a1820"],
    tones: ["#5f9ef8", "#7fb7f9", "#9fc0fa", "#bfd8fb", "#dfeffb"],
  };

  return (
    <div className="min-h-screen bg-gray-100-py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            🎨 Color Palette Generator
          </h1>
          <p className="text-gray-600 mt-2">
            See tints, shades, and tones of any color
          </p>
        </header>
        {/* Controls (Static placeholder) */}
        <ColorControls baseColor={baseColor} step={step} />
        {/* Base Color */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Base Color
          </h2>
          <ColorSwatch color={baseColor} label="Base Color" isBase />
        </section>
        {/* Generated Palette */}
        <ColorPalette palette={palette} />
      </div>
    </div>
  );
}

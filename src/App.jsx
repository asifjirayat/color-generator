import { useState, useRef, useEffect } from "react";
import ColorSwatch from "./components/ColorSwatch.jsx";
import ColorControls from "./components/ColorControls.jsx";
import ColorPalette from "./components/ColorPalette.jsx";
import ToastNotification from "./components/ToastNotification.jsx";

export default function App() {
  const [baseColor, setBaseColor] = useState("#3b82f6");
  const [step, setStep] = useState(10);

  const palette = {
    base: "#3b82f6",
    tints: ["#5a94f7", "#7aa6f8", "#9ab8f9", "#bbc9fa", "#dcdcfb"],
    shades: ["#2a5ea3", "#1f4777", "#142f4b", "#0a1820"],
    tones: ["#5f9ef8", "#7fb7f9", "#9fc0fa", "#bfd8fb", "#dfeffb"],
  };

  //Toast state lifted up
  const [copiedColor, setCopiedColor] = useState(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimerRef = useRef(null);

  //Function to call when any color is copied
  const handleColorCopy = async (color) => {
    try {
      await navigator.clipboard.writeText(color.toUpperCase());

      //Clear existing timer
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }

      //Update state
      setCopiedColor(color);
      setIsToastVisible(true);

      // Set new timer
      toastTimerRef.current = setTimeout(() => {
        setIsToastVisible(false);
        setTimeout(() => {
          setCopiedColor(null);
        }, 300);
      }, 4000);
    } catch (err) {
      console.log("Failed to copy: ", err);
    }
  };

  // Cleanup on mount
  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
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
        <ColorControls
          baseColor={baseColor}
          onColorChange={setBaseColor}
          step={step}
          onStepChange={setStep}
        />
        {/* Base Color Display */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Base Color
          </h2>
          <ColorSwatch
            color={baseColor}
            label="Base Color"
            isBase
            onCopy={() => handleColorCopy(baseColor)}
          />
        </section>
        {/* Generated Palette */}
        <ColorPalette palette={palette} onColorCopy={handleColorCopy} />
        {/* Single Toast at top level */}
        <ToastNotification color={copiedColor} isVisible={isToastVisible} />
      </div>
    </div>
  );
}

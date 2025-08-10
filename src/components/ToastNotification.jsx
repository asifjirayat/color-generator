export default function ToastNotification({ color, isVisible }) {
  if (!isVisible || !color) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-auto w-full max-w xs bg-white shadow-lg rounded-lg border border-gray-200 p-3 flex items-center space-x-2 5 z-50 animate-fade-in">
      {/* Color Badge */}
      <div
        className="w-6 h-6 rounded border-border-gray-300 flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-mono text-gray-800 truncate">
          {color.toUpperCase()}
        </p>
        <p className="text-xs text-gray-500"> Color copied!</p>
      </div>
    </div>
  );
}

# Color Palette Generator 🎨

A sleek, interactive tool that generates **tints, shades, and tones** from any hex color. Perfect for designers and developers who want to explore color variations quickly and intuitively.

👉 **Live Demo:** [https://color-generator-murex.vercel.app/](https://color-generator-murex.vercel.app/)

---

## 🌟 Features

- ✅ Pick a color via **hex input** or **color picker**
- ✅ Adjust step size (1–100%) to control variation intensity
- ✅ Instantly generates:
  - **Tints** (lighter versions)
  - **Shades** (darker versions)
  - **Tones** (muted versions)
- ✅ Click any color to **copy its hex code**
- ✅ Toast notification with color preview on copy
- ✅ Responsive design — works on desktop and mobile
- ✅ Built with modern React, Vite, and Tailwind CSS

---

## 🔧 How It Works

The app uses **HSL color space** to generate variations:

- **Tints**: Increase lightness
- **Shades**: Decrease lightness
- **Tones**: Decrease saturation

All logic is client-side — no backend needed.

When you copy a color, the browser's `navigator.clipboard` API is used for instant copying.

---

## 📁 Project Structure

```bash
/src
├── components/
│ ├── ColorSwatch.jsx # Reusable color tile
│ ├── ColorControls.jsx # Input controls (color + step)
│ └── ColorPalette.jsx # Displays tints/shades/tones
│ └── ToastNotification.jsx # Copy feedback toast
├── utils/
│ ├── colorUtils.js # HEX ↔ HSL conversion
│ └── generatePalette.js # Generate tints/shades/tones
└── App.jsx # Main component with state
```

## 🚀 Technologies Used

- **React** – Component-based UI
- **Vite** – Blazing-fast development server
- **Tailwind CSS** – Utility-first styling
- **JavaScript (ES6+)** – Modern JS with modules
- **Vercel** – Instant deployment

---

## 💡 How to Use

    1. Enter a hex code or pick a color
    2. Adjust the step slider (e.g., 10% = fine steps, 50% = coarse)
    3. Explore the generated palette
    4. Click any color to copy its hex code
    5. Use it in your design or code!

---

## 🛠 How to Clone or Fork

### Clone the repo:

```bash
git clone https://github.com/asifjirayat/color-generator.git
cd color-generator
```

### Install dependencies:

```bash
npm install
```

### Run locally:

```bash
npm run dev
```

### Build for production:

```bash
npm run build
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests!
Open an issue if you find a bug or want to suggest a feature.

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Created By

Designed and built with ❤️ by **Asif Jirayat**

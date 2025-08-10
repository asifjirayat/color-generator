// src/utils/generatePalette.js
import { hexToHsl, hslToHex } from "./colorUtils";

/**
 * Generates tints, shades, and tones of a base color
 * @param {string} hex - Base color in hex format (e.g., "#3b82f6")
 * @param {number} step - Step increment in percentage (e.g., 10)
 * @returns {object} { base, tints, shades, tones }
 */
export function generatePalette(hex, step = 10) {
  const [h, s, l] = hexToHsl(hex);
  const palette = { base: hex, tints: [], shades: [], tones: [] };

  // Generate Tints: increase lightness
  for (let i = step; i <= 100 - l; i += step) {
    palette.tints.push(hslToHex(h, s, l + i));
  }

  // Generate Shades: decrease lightness
  for (let i = step; l - i >= 0; i += step) {
    palette.shades.push(hslToHex(h, s, l - i));
  }

  // Generate Tones: decrease saturation
  for (let i = step; s - i >= 0; i += step) {
    palette.tones.push(hslToHex(h, s - i, l));
  }

  return palette;
}

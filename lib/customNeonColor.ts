import { PluginAPI } from 'tailwindcss/types/config';

export const customNeonColor = (plugins: PluginAPI) => {
  const neonUtilities: Record<string, { boxShadow: string }> = {};
  const { addUtilities, theme } = plugins;
  const colors = theme('colors');
  for (const color in colors) {
    if (typeof colors[color] === 'object') {
      const color1 = colors[color]['hover'] || colors[color]['500'];
      const color2 = colors[color]['DEFAULT'] || colors[color]['700'];
      neonUtilities[`.neon-${color}`] = {
        boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
      };
    }
  }
  addUtilities(neonUtilities);
};

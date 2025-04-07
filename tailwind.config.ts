import type { Config } from 'tailwindcss'
import {
  borderRadius,
  colors,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
} from './src/tokens'

const config: Config = {
  prefix: 'nds-',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
      spacing,
      fontSize,
      borderRadius,
      fontWeight,
      lineHeight,
    },
  },
  plugins: [],
}

export default config

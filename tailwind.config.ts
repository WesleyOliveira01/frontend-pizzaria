import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tomato: '#FF4841',        
        cheese: '#FFD700',       
        basil: '#228B22',         
        crust: '#8B4513',         
        mozzarella: '#F7ECD8',    
      },
    },
  },
  plugins: [],
};

export default config;

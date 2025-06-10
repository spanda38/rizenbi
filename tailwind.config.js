/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",          //  ← app router pages + layouts
    "./components/**/*.{js,ts,jsx,tsx,mdx}",   //  ← your shadcn/ui files
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",      //  ← keep these in case you move into /src
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: { extend: {} },
  plugins: [],
};

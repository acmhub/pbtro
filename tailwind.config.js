/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                theme1: 'var(--theme1)',
                theme2: 'var(--theme2)'
            }
        }
    },
    plugins: []
};

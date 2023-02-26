/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mynerve: ["Mynerve", "sans-serif"],
                shantell: ["Shantell Sans", "sans-serif"],
                inspiration: ["Inspiration", "sans-serif"],
                "roboto-condensed": ["Roboto Condensed", "sans-serif"],
                "roboto-slab": ["Roboto Slab", "sans-serif"],
                "roboto-mono": ["Roboto Mono", "sans-serif"],
                apple: ["Apple SD Gothic Neo", "sans-serif"],
                "noto-sans": ["Noto Sans KR", "sans-serif"],
            },
        },
    },
    plugins: [],
};

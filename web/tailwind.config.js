/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                'bg-calm-blue': '#82B3C9',
                'bg-calm-green': '#89A487',
                'bg-calm-yellow': '#E5D276',
                'bg-calm-peach': '#E9C0A8',

                'text-calm-blue': '#3D596F',
                'text-calm-green': '#395F3F',
                'text-calm-yellow': '#9D7C35',
                'text-calm-peach': '#B77D56',

                'border-calm-blue': '#5C7B8F',
                'border-calm-green': '#6D8F6C',
                'border-calm-yellow': '#C5B265',
                'border-calm-peach': '#D6AB94',

                'accent-calm-blue': '#5DA4B8',
                'accent-calm-green': '#6CA771',
                'accent-calm-yellow': '#F2D58D',
                'accent-calm-peach': '#F7C3A3',

            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("tailwindcss-animate")],
};
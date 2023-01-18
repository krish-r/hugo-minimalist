/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["content/**/*.md", "layouts/**/*.html"],
    darkMode: "class",
    theme: {
        fontFamily: {
            mono: ["JetBrains Mono", "ui-monospace", "monospace"],
            sans: [
                "Inter",
                "ui-sans-serif",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
        screens: {
            sm: "480px",
            md: "720px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {},
            animation: {
                "fade-1": "fadeIn 1s",
                "fade-3": "fadeIn 3s",
                "fade-5": "fadeIn 5s",
                wiggle: "wiggle 1s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-7deg)" },
                    "50%": { transform: "rotate(7deg)" },
                },
            },
        },
    },
    plugins: [],
};

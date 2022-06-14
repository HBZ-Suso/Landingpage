import colors from 'tailwindcss/colors.js';


export default {
    plugins: [],
    theme: {
        extend: {},
        transparent: 'transparent',
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            suso: {
                light: "#008080",
                dark: "#003030"
            }
        },
    },
    purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
    variants: {
        extend: {},
    },
    darkMode: false, // or 'media' or 'class'
}
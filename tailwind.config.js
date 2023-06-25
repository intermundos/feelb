/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ './src/**/*.{html,js,ts,tsx,vue}' ],
    theme: {
        container: false,
    },
    plugins: [
        require( 'daisyui' ),
    ],
    daisyui: {
        // themes: [ 'dark' ],
        styled: true,
    },
}

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                yellow: "#fbd40a",
                blur: "rgba(0,0,0,0.4)",
                sky_blue: "#8ec2f6",
            },
            fontFamily: {
                sans: ["SegoeUI"],
                HANDotum: ["HANDotum"],
                NotoSansKR: ["NotoSansKR"],
            },
            width: {
                main_width: "25rem",
            },
        },
    },
    plugins: [],
};

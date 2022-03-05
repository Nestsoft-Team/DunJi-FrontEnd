module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark_yellow: "#e58e26",
                yellow: "#fbd40a",
                light_yellow: "#FEECA3",
                title_color: "#282F66",
                blur: "rgba(0,0,0,0.4)",
                sky_blue: "#8ec2f6",
                orange: "#EF9545",
                border_color: "#D2D2D2",
            },
            fontFamily: {
                sans: ["SegoeUI"],
                HANDotum: ["HANDotum"],
                NotoSansKR: ["NotoSansKR"],
            },
            width: {
                main_width: "70vw",
                "10vw": "10vw",
                "20vw": "20vw",
                "30vw": "30vw",
                "40vw": "40vw",
                "50vw": "50vw",
                "60vw": "60vw",
                "70vw": "70vw",
                "80vw": "80vw",
                "90vw": "90vw",
                "100vw": "100vw",
            },
            padding: {
                room_register_pd: "6vw",
            },
            height: {
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
                "100vh": "100vh",
            },
            minWidth: {
                20: "25rem",
            },
            boxShadow: {
                thick: "0 0 20px 3px rgba(0,0,0,0.2)",
            },
            borderRadius: {
                middle: "40px 40px 40px 40px",
                room_register_rounded: "1rem",
            },
            animation: {
                "room-list-up": "room-list-up-key 0.3s linear reverse",
                "room-list-down": "room-list-up-key 0.3s linear",
            },
            keyframes: {
                "room-list-up-key": {
                    "0%": { transform: "none" },
                    "100%": { transform: "translateY(100%)" },
                },
            },
        },
    },
    plugins: [],
};

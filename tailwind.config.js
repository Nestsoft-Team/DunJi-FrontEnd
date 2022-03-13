module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    methods: {
        setViewHeight: function () {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        },
    },
    mounted: function () {
        this.setViewHeight();
        window.addEventListener("resize", () => {
            this.setViewHeight();
        });
    },
    theme: {
        height: (theme) => ({
            auto: "auto",
            ...theme("spacing"),
            full: "100%",
            screen: "calc(var(--vh) * 100)",
        }),
        minHeight: (theme) => ({
            0: "0",
            ...theme("spacing"),
            full: "100%",
            screen: "calc(var(--vh) * 100)",
        }),
        extend: {
            colors: {
                background_beige: "#F1EEE8",
                dark_yellow: "#e58e26",
                yellow: "#fbd40a",
                light_yellow: "#FEECA3",
                title_color: "#282F66",
                blur: "rgba(0,0,0,0.4)",
                main: "#FF9240",
                border_color: "#E3E2E0",
                component_white: "#F9F9F9",
                font_gray: "#A9A7A2",
                black: "#3F3C3A",
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
                room_register_btn_height1: "3.5rem",
                room_register_btn_height2: "4.5rem",
                map_room_list_height: "25rem",
            },
            translate: {
                map_room_list_height: "25rem",
            },
            minWidth: {
                20: "25rem",
            },
            boxShadow: {
                thick: "0 0 20px 3px rgba(0,0,0,0.2)",
            },
            borderRadius: {
                middle: "40px 40px 40px 40px",
                room_register_rounded: "0.9rem",
            },
            // animation: {
            //     "room-list-up": "room-list-up-key 0.3s linear reverse",
            //     "room-list-down": "room-list-up-key 0.3s linear",
            // },
            // keyframes: {
            //     "room-list-up-key": {
            //         "0%": { transform: "none" },
            //         "100%": { transform: "translateY(100%)" },
            //     },
            // },
            gap: {
                room_register_gap: "1rem",
            },
        },
    },
    plugins: [],
};

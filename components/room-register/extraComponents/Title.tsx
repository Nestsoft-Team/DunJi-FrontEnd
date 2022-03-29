import { useState } from "react";
import CategoryHeader from "../CategoryHeader";

export default function Parking() {
    const [text, setText] = useState("");
    return (
        <>
            <CategoryHeader title="방 제목" />
            <input
                className="h-room_register_btn_height1 w-full rounded-room_register_rounded  text-xl pl-4 placeholder-font_gray outline-0"
                value={text}
                placeholder="제목"
                onChange={(e) => setText(e.target.value)}
            />
        </>
    );
}

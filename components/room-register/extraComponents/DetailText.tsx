import { useState } from "react";
import CategoryHeader from "components/common/CategoryHeader";

export default function Parking() {
    const [text, setText] = useState("");
    return (
        <>
            <CategoryHeader title="상세설명" />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border border-border_color
                rounded-room_register_rounded w-full h-48 p-4 text-xl
                outline-0
                "
            ></textarea>
        </>
    );
}

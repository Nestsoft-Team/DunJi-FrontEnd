import CategoryHeader from "../CategoryHeader";
import CommonSelect from "./CommonSelect";
export default function Floor() {
    return (
        <>
            <CategoryHeader title="층/구조" />
            <div className="w-full grid grid-cols-2 gap-room_register_gap">
                <CommonSelect />
                <CommonSelect />
                <CommonSelect />
            </div>
        </>
    );
}

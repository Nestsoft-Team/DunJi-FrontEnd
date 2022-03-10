export default function CommonInput() {
    const floorArr = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className="text-2xl mb-2">전체층</div>
            <select className="bg-white border border-border_color w-full rounded-room_register_rounded h-room_register_btn_height2 text-xl pl-4 placeholder-black outline-0 focus:border-orange ">
                {floorArr.map((item, index) => (
                    <option key={index} value={item}>
                        {item}층
                    </option>
                ))}
            </select>
        </div>
    );
}

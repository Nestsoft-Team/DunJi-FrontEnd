type propsType = {
    title: string;
    selectArr: Array<string>;
};

export default function CommonSelect({ title, selectArr }: propsType) {
    const floorArr = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className="text-2xl mb-2">{title}</div>
            <select className="bg-white  w-full rounded-standard_rounded h-room_register_btn_height1 text-xl pl-4 placeholder-black outline-0">
                {selectArr.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}

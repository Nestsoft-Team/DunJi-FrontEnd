import { Dispatch, SetStateAction, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryHeader from "components/common/CategoryHeader";
import Modal from "./Modal";
export default function Floor() {
    const [elevatorCheck, setElevatorCheck] = useState(false);
    const selectArr = [
        {
            title: "전체층",
            selectArr: ["1층", "2층"],
        },
        {
            title: "해당층",
            selectArr: ["1층", "2층"],
        },
        {
            title: "",
            selectArr: ["오픈형", "분리형", "복층형"],
        },
    ];

    const [totalFloor, setTotalFloor] = useState("전체층");
    const [currentFloor, setCurrentFloor] = useState("해당층");
    const [structure, setStructure] = useState("구조");

    const [openModal, setOpenModal] = useState(false);
    const [targetArr, setTargetArr] = useState([""]);
    const [modalTitle, setModalTitle] = useState("");

    const modalHandler = (
        openVal: boolean,
        handler: Dispatch<SetStateAction<boolean>>,
        arr: Array<string>,
        title: string
    ) => {
        handler(!openVal);
        setTargetArr(arr);
        setModalTitle(title);
    };

    const modalArr = [
        {
            valueArr: ["1층", "2층", "3층", "4층", "5층"],
            title: "전체층",
            value: totalFloor,
        },
        {
            valueArr: ["1층", "2층", "3층", "4층", "5층"],
            title: "해당층",
            value: currentFloor,
        },
        {
            valueArr: ["오픈형", "분리형", "복층형"],
            title: "구조",
            value: structure,
        },
    ];

    const floorArr = ["1층", "2층", "3층", "4층", "5층"];
    return (
        <div>
            <CategoryHeader title="층/구조" />
            {openModal && (
                <Modal
                    title={modalTitle}
                    arr={targetArr}
                    handler={setOpenModal}
                />
            )}
            <div className="w-full grid grid-cols-2 gap-room_register_gap">
                {modalArr.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white  w-full rounded-standard_rounded h-room_register_btn_height1 text-xl px-4 flex justify-between items-center"
                        onClick={() =>
                            modalHandler(
                                openModal,
                                setOpenModal,
                                item.valueArr,
                                item.title
                            )
                        }
                    >
                        <span>{item.value}</span>
                        <FontAwesomeIcon icon="chevron-down" />
                    </div>
                ))}

                <div className="flex justify-end gap-2 items-center text-xl">
                    <label
                        htmlFor="noFee"
                        className={`inline-block before:content-[''] w-[1.6rem] h-[1.6rem] border  border-black mr-2  algin-middle  rounded-[0.3rem] text-center  ${
                            elevatorCheck &&
                            "before:content-['✔️']  bg-font_gray border-0"
                        }`}
                        onClick={() => setElevatorCheck(!elevatorCheck)}
                    ></label>
                    <input type="checkbox" id="noFee" className="hidden" />
                    <span>엘리베이터 있음</span>
                </div>
            </div>
        </div>
    );
}

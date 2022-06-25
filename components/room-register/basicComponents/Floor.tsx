import { Dispatch, SetStateAction, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryHeader from "components/common/CategoryHeader";
import Modal from "./Modal";
import {
    dispatchCurrentFloor,
    dispatchElevator,
    dispatchEntireFloor,
    dispatchStruct,
} from "store/modules/roomRegister";
import InputSelectBox from "components/common/InputSelectBox";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
export default function Floor() {
    const [state, dispatch] = useRoomRegisterRedux();

    const totalFloor = state.entireFloor;
    const currentFloor = state.floor;
    const structure = state.struct;
    const elevatorCheck = state.elevator;

    const [openModal, setOpenModal] = useState(false); // 모달 오픈 변수
    const [targetArr, setTargetArr] = useState([""]); // 모달 내 컨텐츠 배열
    const [modalTitle, setModalTitle] = useState(""); // 모달 제목
    const dispatchIndex = useRef(0);

    const dispatchArr = [
        dispatchEntireFloor,
        dispatchCurrentFloor,
        dispatchStruct,
    ];

    const modalHandler = (
        openVal: boolean,
        handler: Dispatch<SetStateAction<boolean>>,
        arr: Array<string>,
        title: string,
        index: number
    ) => {
        handler(!openVal);
        setTargetArr(arr);
        setModalTitle(title);
        dispatchIndex.current = index;
    };
    const floorArr = ["1층", "2층", "3층", "4층", "5층"];
    const modalArr = [
        {
            valueArr: floorArr,
            title: "전체층",
            value: totalFloor,
            dispatchHandler: dispatchEntireFloor,
        },
        {
            valueArr: floorArr,
            title: "해당층",
            value: currentFloor,
            dispatchHandler: dispatchCurrentFloor,
        },
        {
            valueArr: ["오픈형", "분리형", "복층형"],
            title: "구조",
            value: structure,
            dispatchHandler: dispatchStruct,
        },
    ];

    const checkHandler = () => {
        dispatch(dispatchElevator(Number(!elevatorCheck)));
    };

    return (
        <div>
            <CategoryHeader title="층/구조" />
            {openModal && (
                <Modal
                    arr={targetArr}
                    title={modalTitle}
                    openHandler={setOpenModal}
                    dispatchHandler={dispatchArr[dispatchIndex.current]}
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
                                item.title,
                                index
                            )
                        }
                    >
                        <span>
                            {typeof item.value === "number"
                                ? item.value + "층"
                                : item.value}
                        </span>
                        <FontAwesomeIcon icon="chevron-down" />
                    </div>
                ))}

                <InputSelectBox
                    check={elevatorCheck}
                    content="엘레베이터 있음"
                    checkHandler={checkHandler}
                    converse={false}
                />
            </div>
        </div>
    );
}

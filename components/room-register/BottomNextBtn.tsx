import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { useCallback, useState } from "react";
import { postRoom } from "store/modules/roomRegister";

export default function BottomNextBtn() {
    const [state, dispatch] = useRoomRegisterRedux();
    const isEmpty = useCallback(function (value: any) {
        if (
            value == "" ||
            value == null ||
            value == undefined ||
            (value != null &&
                typeof value == "object" &&
                !Object.keys(value).length)
        ) {
            return true;
        } else {
            return false;
        }
    }, []);

    const checkHandler = () => {
        let formData = new FormData();
        for (const item in state) {
            if (!isEmpty(state[item])) formData.append(item, state[item]);
        }

        // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
        const delete_arr = ["manageSelect", "option", "car", "pet", "loan"];
        for (let i = 0; i < delete_arr.length; i++)
            formData.delete(delete_arr[i]);

        // redux에서 관리비 전기세,가스,수도,인터넷,TV를 배열관리하여 formData에선 각 항목을 입력
        const manage_arr = [
            "manageElec",
            "manageGas",
            "manageWater",
            "manageInternet",
            "manageTV",
        ];
        for (let i = 0; i < manage_arr.length; i++)
            formData.append(manage_arr[i], state["manageSelect"][i]);

        // redux에서 옵션(상세정보) 배열관리하여 formData에선 각 항목을 입력
        const option_arr = [
            "aircon",
            "refri",
            "washer",
            "gas",
            "induc",
            "micro",
            "desk",
            "shelf",
            "bed",
            "closet",
            "sink",
            "shoe",
        ];
        for (let i = 0; i < option_arr.length; i++)
            formData.append(option_arr[i], state["option"][i]);

        // 상단 isEmpty에서 필터링 되는 항목들 따로 입력

        if (state.manage === 0) formData.append("manageCost", "0");
        const chooseOneArr = ["car", "pet", "loan"]; // 두 항목 중 하나를 고르는 경우 (주차공간, 반려동물, 전세대출)

        for (let i = 0; i < chooseOneArr.length; i++)
            if (state[chooseOneArr[i]] !== 2)
                formData.append(chooseOneArr[i], state[chooseOneArr[i]]);

        const checkBox_arr = ["manage", "elevator", "availPeriodConsul"];

        for (let i = 0; i < checkBox_arr.length; i++)
            formData.append(checkBox_arr[i], state[checkBox_arr[i]]);

        const all_items_arr = [
            { longitude: "주소를" },
            { latitude: "주소를" },
            { sido: "주소를" },
            { sigungu: "주소를" },
            { dong: "주소를" },
            { ri: "주소를" },
            { jibun: "주소를" },
            { address: "주소를" },
            { detailAddress: "상세주소를" },
            { roomType: "방 종류를" },
            { dealType: "거래유형을" },
            { priceUnit: "가격 단위를" },
            { deposit: "보증금을" },
            { price: "일/주/월세를" },
            { manage: "관리비를" },
            { manageCost: "관리비 유무를" },
            { manageElec: "관리비 옵션를" },
            { manageGas: "관리비 옵션을" },
            { manageWater: "관리비 옵션을" },
            { manageInternet: "관리비 옵션을" },
            { manageTV: "관리비 옵션을" },
            { entireFloor: "전체 층을" },
            { floor: "현재 층을" },
            { struct: "층/구조 -> 구조를" },
            { elevator: "엘리베이터 유무를" },
            { roomSize: "방 크기를" },
            { availPeriodFrom: "입주 가능 기간(시작 시점)을" },
            { availPeriodTo: "입주 가능 기간(종료 시점)을" },
            { availPeriodConsul: "입주 기간 협의 여부를" },
            { aircon: "옵션을" },
            { refri: "옵션을" },
            { washer: "옵션을" },
            { gas: "옵션을" },
            { induc: "옵션을" },
            { micro: "옵션을" },
            { desk: "옵션을" },
            { shelf: "옵션을" },
            { bed: "옵션을" },
            { closet: "옵션을" },
            { sink: "옵션을" },
            { shoe: "옵션을" },
            { car: "옵션을" },
            { pet: "옵션을" },
            { loan: "옵션을" },
            { title: "방 제목을" },
            { explain: "상세설명을" },
        ];

        try {
            for (let item of all_items_arr) {
                const key = Object.keys(item)[0];
                const message = Object.values(item)[0];
                if (!formData.has(key)) {
                    throw message;
                }
                if (
                    key === "entireFloor" &&
                    formData.get("entireFloor") === "전체층"
                ) {
                    throw "전체 층을";
                } else if (
                    key === "floor" &&
                    formData.get("floor") === "현재층"
                ) {
                    throw "현재 층을";
                } else if (
                    key === "struct" &&
                    formData.get("struct") === "구조"
                ) {
                    throw "구조를";
                }
            }

            dispatch(postRoom(formData));
        } catch (e) {
            alert(e + " 입력해 주세요");
        }
    };

    return (
        <div
            className="bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around"
            onClick={checkHandler}
        >
            <div className="text-2xl text-white">방 내놓기</div>
            <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
    );
}

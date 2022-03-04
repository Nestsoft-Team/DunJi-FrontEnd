import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { useState } from "react";
import SubHeader from "../SubHeader";

export default function DetailRegister() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <>
            <div className="w-screen h-4  bg-zinc-100 border-t"></div>
            <SubHeader title="2. 상세정보" />
        </>
    );
}

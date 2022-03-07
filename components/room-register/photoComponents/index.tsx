import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import CategoryHeader from "../CategoryHeader";
import SubHeader from "../SubHeader";

export default function PhotoRegister() {
    const dispatch = useDispatch();
    const roomRegister = useSelector((state: RootState) => state.roomRegister);

    return (
        <div className="h-full">
            <div className="w-screen h-4  bg-zinc-100 border-t border-border_color"></div>
            <SubHeader title="3. 사진등록" />
            <div className="px-room_register_pd w-screen">
                <div className="pt-4 pb-2 text-orange text-2xl">
                    대표사진(필수)
                </div>
                <div className="text-xl">
                    매물을 대표하는 사진입니다. 밝은 사진이 좋습니다.
                </div>
                <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    multiple
                />
            </div>
        </div>
    );
}

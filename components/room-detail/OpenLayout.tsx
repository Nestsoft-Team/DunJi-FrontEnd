import { Dispatch, SetStateAction } from "react";

type propsType = {
    children: any;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function OpenLayout({ children, open, setOpen }: propsType) {
    const openHandler = () => setOpen(!open);
    return (
        <div
            onClick={openHandler}
            className="w-full rounded-standard_rounded bg-component_white my-4"
        >
            {children}
        </div>
    );
}

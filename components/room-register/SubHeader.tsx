import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type titleType = {
    title: String;
};
export default function SubHeader({ title }: titleType) {
    return (
        <div
            className="flex w-screen justify-between px-room_register_pd 
                      py-4  h-24 items-center  border-b border-border_color"
        >
            <div className="flex items-center">
                <div className="text-3xl">{title}</div>
            </div>
            <FontAwesomeIcon className="text-3xl" icon="chevron-down" />
        </div>
    );
}

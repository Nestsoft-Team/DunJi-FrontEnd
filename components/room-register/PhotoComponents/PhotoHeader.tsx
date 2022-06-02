type propsType = {
    title: string;
    subTitle: string;
};

export default function PhotoHeader({ title, subTitle }: propsType) {
    return (
        <>
            <div className="text-2xl">{title}&nbsp;</div>
            <div className="text-xl my-2 text-font_gray">{subTitle}</div>
        </>
    );
}

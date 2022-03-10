type propsType = {
    title: string;
    subTitle: string;
};

export default function PhotoHeader({ title, subTitle }: propsType) {
    return (
        <>
            <div className="pt-4 text-orange text-2xl">{title}</div>
            <div className="text-xl my-4">{subTitle}</div>
        </>
    );
}

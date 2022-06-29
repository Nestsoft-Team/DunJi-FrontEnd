type propsType = {
    title: string;
    content: string | number;
    last: boolean;
};

export default function InfoField({ title, content, last }: propsType) {
    return (
        <div
            className={`${
                last && `border-b border-border_color`
            } py-4 text-[1.2rem] grid grid-cols-[1fr_2fr]`}
        >
            <span className="text-font_gray">{title}</span>
            <span>{content}</span>
        </div>
    );
}

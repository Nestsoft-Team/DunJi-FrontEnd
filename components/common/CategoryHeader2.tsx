type propsType = {
    title: String;
};

export default function CategoryHeader2({ title }: propsType) {
    return (
        <div className="py-4 text-2xl border-t border-border_color mt-8">
            {title}
            <span className="text-font_gray text-lg">&nbsp;중복 선택 가능</span>
        </div>
    );
}

type propsType = {
    title: String;
};

export default function CategoryHeader({ title }: propsType) {
    return (
        <div className="py-4 text-2xl border-t border-border_color mt-8">
            {title}
        </div>
    );
}

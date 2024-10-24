const Bookmark = ({bk}) => {
    const {title} = bk
    return (
        <div className="bg-white p-4 m-4 rounded-2xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;
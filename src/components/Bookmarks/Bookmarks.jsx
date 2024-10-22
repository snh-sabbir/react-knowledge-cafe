import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bkmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="border border-[#9585f2] p-4 bg-[#efedfd]">
        <h2 className="text-3xl text-[#6951ed] font-bold">Reading Time: {readingTime} min</h2>
      </div>
      <div className="bg-slate-200 p-4 m-4 rounded-2xl">
        <h2 className="font-bold text-2xl">Bookmarked Blogs: {bkmarks.length}</h2>
        <div>
          {bkmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} bk={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;

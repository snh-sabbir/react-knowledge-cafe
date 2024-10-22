import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bkmarks }) => {
  return (
    <div className="md:w-1/3">
      <h2>Bookmarked Blogs: {bkmarks.length}</h2>
      <div>
        {bkmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bk={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;

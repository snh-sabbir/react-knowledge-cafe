import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blg, handleBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = blg;
  return (
    <div>
      <br />
      <div className="border border-red-300 grid gap-5">
        <img className="w-full h-[500px]" src={cover} alt="" />
        <div className="flex justify-between items-center">
          <div>
            <div>
              <h3 className="font-bold">{author}</h3>
              <p className="text-gray-500">Date: {posted_date}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-500">{reading_time} min read</p>
            <button onClick={() => handleBookmarks(blg)}>
              <FaRegBookmark></FaRegBookmark>
            </button>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-5xl">{title}</h2>
          <p className="text-gray-500">
            {hashtags.map((hash, idx) => (
              <span key={idx}>
                <a href="">{hash}</a>
              </span>
            ))}
          </p>
          <button onClick={() => handleMarkAsRead(reading_time)} className="text-purple-900 underline">Mark as read</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

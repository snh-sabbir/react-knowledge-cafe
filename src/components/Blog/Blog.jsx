const Blog = ({ blg }) => {
  console.log(blg);
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
            <img src={author_img} alt="" />
            <div>
              <h3 className="font-bold">{author}</h3>
              <p className="text-gray-500">{posted_date}</p>
            </div>
          </div>
          <p className="text-gray-500 flex gap-2">{reading_time} read <img src="https://img.icons8.com/?size=24&id=82461&format=png" alt="" /></p>
        </div>
        <h2 className="text-5xl">{title}</h2>
        <p className="text-gray-500">{hashtags}</p>
      </div>
    </div>
  );
};

export default Blog;

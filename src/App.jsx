import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="flex justify-between gap-10">
          <Blogs handleBookmarks={handleBookmarks}></Blogs>
          <Bookmarks bkmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;

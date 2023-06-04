import { useState, useEffect } from "react";

export default function Blog({ blog, handleDelete }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <div className={`blog-preview ${blog.color}`} key={blog.id}>
      {/* <div onClick={() => handleDelete(blog.id)} className="Delete">
    {" "}
    =
  </div> */}

      <div className="Edition">
        <div onClick={toggleMenu} className="edition-icon">
          =
        </div>
        {isMenuShown && (
          <div className="menu">
            <div className="menu-item">Edit</div>
            <div onClick={() => handleDelete(blog.id)} className="menu-item ">
              Delete
            </div>
          </div>
        )}
      </div>

      <h2 className="blogTitle">{blog.title}</h2>
      <p className="Data">{blog.data}</p>
      <p className="blogBody"> {blog.body}</p>

      <div className="Home"></div>
    </div>
  );
}

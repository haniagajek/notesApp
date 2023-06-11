import { useState } from "react";
import { createPortal } from "react-dom";

export default function Blog({ blog, handleDelete, setEditingBlog }) {
  const [isMenuShown, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown(!isMenuShown);
  }

  function showEdit() {
    setEditingBlog(blog);
  }

  return (
    <div className={`blog-preview ${blog.color}`} key={blog.id}>
      <div className="Edition">
        <div onClick={toggleMenu} className="edition-icon">
          =
        </div>
        {isMenuShown && (
          <>
            <div className="menu">
              <div onClick={showEdit} className="menu-item">
                Edit
              </div>
              <div onClick={() => handleDelete(blog.id)} className="menu-item ">
                Delete
              </div>
            </div>
            {createPortal(
              <div
                onClick={() => setIsMenuShown(false)}
                className="backdrop"
              />,
              document.body
            )}
          </>
        )}
      </div>
      <h2 className="blogTitle">{blog.title}</h2>
      <p className="Data">{blog.data}</p>
      <p className="blogBody"> {blog.body}</p>
      <div className="Home"></div>
    </div>
  );
}

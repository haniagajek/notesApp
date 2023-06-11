import { useState } from "react";
import CreateEdit from "./CreateEdit";
import Blog from "./Blog";
const BlogList = ({ blogs, handleDelete, refetchData, setSuccess }) => {
  const [shown, setShown] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  return (
    <div>
      <div className="header">
        <h2 className="header_h2">Notes App</h2>
      </div>
      <div className="upperWidgets">
        <h1 className="uWh1">Personal Workspace</h1>
        <div onClick={() => setShown(true)} className="AddButton">
          <h3 className="Button bh3">Add note</h3>
          <h3 className="Button bplus">+</h3>
        </div>
      </div>
      <content>
        <nav>
          <ul>
            <li>11.06.2023</li>
            <li>10.06.2023</li>
            <li>09.06.2023</li>
            <li>08.06.2023</li>
          </ul>
        </nav>
        <div className="blogss">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              handleDelete={handleDelete}
              setEditingBlog={setEditingBlog}
            />
          ))}
        </div>
      </content>
      {shown && (
        <CreateEdit
          close={() => setShown(false)}
          refetchData={refetchData}
          setSuccess={setSuccess}
        />
      )}
      {Boolean(editingBlog) && (
        <CreateEdit
          close={() => setEditingBlog(null)}
          refetchData={refetchData}
          setSuccess={setSuccess}
          blog={editingBlog}
        />
      )}
    </div>
  );
};

export default BlogList;

// musisz dodac do addbutton funkcje ktora wysuwa panel create

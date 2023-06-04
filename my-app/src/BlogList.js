import { useState } from "react";
import Create from "./Create";
import Blog from "./Blog";

const BlogList = ({ blogs, handleDelete, refetchData, setSuccess }) => {
  const [shown, setShown] = useState(false);

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
      <div className="blogss">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} handleDelete={handleDelete} />
        ))}
      </div>
      {shown && (
        <Create
          close={() => setShown(false)}
          refetchData={refetchData}
          setSuccess={setSuccess}
        />
      )}
    </div>
  );
};

export default BlogList;

// musisz dodac do addbutton funkcje ktora wysuwa panel create

import { useEffect, useState } from "react";
import "./index.css";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleDelete = (id) => {
    // const newBlogs = blogs.filter((blog) => blog.id !== id);
    // setBlogs(newBlogs);
    fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
      setSuccess(true);
      fetchData();
    });
  };

  // `npx json-server --watch data/db.json --port 8000`

  // fetch("http://localhost:8000/notes", )
  // .then((response) => response.json())
  // .then((data) => setBlogs(data));

  const fetchData = () => {
    fetch("http://localhost:8000/notes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          handleDelete={handleDelete}
          refetchData={fetchData}
          setSuccess={setSuccess}
        />
      )}
      {success && (
        <div className="popup">
          <h3 className="ppclose" onClick={() => setSuccess(false)}>
            x
          </h3>
          <h2 className="poptext bold">Success</h2>
          <h3 className="poptext">Note created successfully</h3>
        </div>
      )}
    </div>
  );
};

export default Home;

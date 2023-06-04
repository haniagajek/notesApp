import { useState } from "react";

const Create = ({ refetchData, close, setSuccess }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [color, setColor] = useState("blue");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, color };

    setIsPending(true);

    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      refetchData();
      setSuccess(true);
    });
  };

  return (
    <div className="create">
      <div className="box">
        <h2 className="createH2">Create new note</h2>
        <div className="createClose" onClick={close}>
          x
        </div>
        <form onSubmit={handleSubmit}>
          <div className="section">
            <h3>Title</h3>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <h3>Please provide title of your note</h3>
          </div>
          <div className="section">
            <div className="contentBox">
              <h3>Content</h3>
              <h3>{body.length}/200</h3>
            </div>
            <textarea
              required
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
            <h3>Please provide content of your note</h3>
          </div>
          <div className="section">
            <h3>Color</h3>
            <div className="colors">
              <div
                className={`color blue ${color === "blue" ? "active" : ""}`}
                onClick={() => setColor("blue")}
              ></div>
              <div
                className={`color green ${color === "green" ? "active" : ""}`}
                onClick={() => setColor("green")}
              ></div>
              <div
                className={`color pink ${color === "pink" ? "active" : ""}`}
                onClick={() => setColor("pink")}
              ></div>
              <div
                className={`color yellow ${color === "yellow" ? "active" : ""}`}
                onClick={() => setColor("yellow")}
              ></div>
            </div>
            <h3>Please choose the color of your note</h3>
          </div>
          <div className="buttons">
            <button className="cncl Bttn" onClick={close}>
              Cancel
            </button>
            <button className="submt Bttn" type="submit">
              {/* onSubmit={() => setShown(false) */}
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

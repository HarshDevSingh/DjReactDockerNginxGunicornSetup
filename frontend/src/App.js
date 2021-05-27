import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1/api/").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <div className="App">
      {blogs.map((b) => (
        <div key={b.id}>
          <h5 style={{ textAlign: "center" }}>{b.title}</h5>
          <p
            style={{
              textAlign: "center",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            {b.content}
          </p>
          <hr style={{ width: "50%" }} />
          <hr style={{ width: "80%" }} />
        </div>
      ))}
    </div>
  );
}

export default App;

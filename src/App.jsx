import { useState } from "react";
import "./App.css";
import Picture from "./components/Picture";

function App() {
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState([]);
  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("Please enter a word");
    } else {
      //API
      fetchImageAPI();
    }
  }

  async function fetchImageAPI() {
    const url = `${
      import.meta.env.VITE_API_URL
    }?page=1&query=${word}&client_id=${
      import.meta.env.VITE_API_KEY
    }&per_page=15`;
    const res = await fetch(url);
    const data = await res.json();
    const result = data.results;
    if (result.length > 0) {
      setPhoto(result);
      console.log(result);
    } else {
      alert("no data");
      setWord("");
    }
  }

  return (
    <div>
      <h1>search img</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="image name"
          value={word}
          onChange={(w) => setWord(w.target.value)}
        />
        <button type="submit">search</button>
      </form>
      <div className="search-result">
        {photo.map((data, index) => {
          return <Picture key={index} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;

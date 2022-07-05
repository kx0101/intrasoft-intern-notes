import "./App.css";
import {useState} from "react";

function App() {
  const [array, setArray] = useState([]);
  const [item, setItem] = useState("");
  const [random, setRandom] = useState("");
  const [visibility, setVisibility] = useState(true);

  const randomNumber = () => Math.floor(Math.random() * array.length);

  const pickRandom = () => setRandom(array[randomNumber()]);

  const toggle = (visibility) => setVisibility(!visibility);

  return (
    <>
      <button onClick={() => toggle(visibility)}>
        {visibility ? "hide" : "appear"}
      </button>
      {visibility && (
        <>
          <ul>
            {array.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
          {random ? random : ""}
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              onChange={(e) => setItem(e.target.value)}
              name="option"
              value={item}
              placeholder="Enter a valid value"
            />
            <button onClick={() => setArray([...array, item])}>
              Add Option
            </button>
            <button onClick={() => setArray([])}>reset</button>
            <button onClick={() => pickRandom()}>Random</button>
          </form>
        </>
      )}
    </>
  );
}

export default App;

import "./App.css";
import { CredCardForm } from "./components/CredCardForm";
import { DuplicatesAlgo } from "./components/DuplicatesAlgo";
import { ArraysAlgo } from "./components/ArraysAlgo";
import { ArraysAlgoCorrect } from "./components/ArraysAlgoCorrect";

function App() {
  async function callApi(url) {
    const res = await fetch(url);

    console.log("res", res);

    const data = res.text();

    console.log("data", data);
  }

  return (
    <div className="main-page">
      <button
        onClick={() =>
          callApi(
            "https://queenslabharapu.netlify.app/.netlify/functions/test-function"
          )
        }
      >
        f1
      </button>
      <button
        onClick={() => callApi("https://queenslabharapu.netlify.app/cat-api/3")}
      >
        f2
      </button>
      <button
        onClick={() =>
          callApi(
            "https://queenslabharapu.netlify.app/.netlify/functions/cat-api/5"
          )
        }
      >
        f3
      </button>
      <CredCardForm />
      <DuplicatesAlgo />
      <ArraysAlgoCorrect />
      <ArraysAlgo />
    </div>
  );
}

export default App;

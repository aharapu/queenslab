import "./App.css";
import { CredCardForm } from "./components/CredCardForm";
import { DuplicatesAlgo } from "./components/DuplicatesAlgo";
import { ArraysAlgo } from "./components/ArraysAlgo";
import { ArraysAlgoCorrect } from "./components/ArraysAlgoCorrect";

function App() {
  return (
    <div className="main-page">
      <CredCardForm />
      <DuplicatesAlgo />
      <ArraysAlgoCorrect />
      <ArraysAlgo />
    </div>
  );
}

export default App;

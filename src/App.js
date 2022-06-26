import "./App.css";
import { CredCardForm } from "./components/CredCardForm";
import { DuplicatesAlgo } from "./components/DuplicatesAlgo";
import { ArraysAlgo } from "./components/ArraysAlgo";

function App() {
  return (
    <div className="main-page">
      <CredCardForm />
      <DuplicatesAlgo />
      <ArraysAlgo />
    </div>
  );
}

export default App;

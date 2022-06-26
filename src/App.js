import "./App.css";
import { CredCardForm } from "./components/CredCardForm";
import { DuplicatesAlgo } from "./components/DuplicatesAlgo/DuplicatesAlgo";

function App() {
  return (
    <div className="main-page">
      <CredCardForm />
      <DuplicatesAlgo />
    </div>
  );
}

export default App;

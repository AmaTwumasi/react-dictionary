import Dictionary from "./dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center">
        Dictionary
      </header>
      <main>
        {" "}
        <Dictionary defaultKeyword="hope"/>{" "}
      </main>
    </div>
  );
}

export default App;

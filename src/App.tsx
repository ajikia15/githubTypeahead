import "./App.css";
import { Searchbar } from "./components/Searchbar";
import Suggestions from "./components/Suggestions";

function App() {
  return (
    <main className="relative h-screen w-full mx-auto antialiased">
      <Searchbar />
    </main>
  );
}

export default App;

import "./App.css";
import { getData } from "./api";
import ListJob from "./components/ListJob";

getData();
function App() {
  return (
    <div className="App">
      <ListJob />
    </div>
  );
}
export default App;

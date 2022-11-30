import "./App.css";
import { getData } from "./api";
import ListJob from "./components/ListJob";

getData();
function App() {
  return (
    <div className="App flex  flex-col justify-items-center">
      <ListJob />
    </div>
  );
}
export default App;

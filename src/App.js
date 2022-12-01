import "./App.css";
import { getData } from "./api";
import ListJob from "./components/ListJob";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <div className="App flex  flex-col justify-items-center">
      <ListJob />
    </div>
  );
}
export default App;

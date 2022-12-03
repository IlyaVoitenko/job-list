import "./App.css";
import { getData } from "./api";
import { Routes, Route } from "react-router-dom";
import ListJob from "./components/ListJob";
import DetailJob from "./components/DetailJob";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  dispatch(getData());
  return (
    <div className="App flex  flex-col justify-items-center">
      <Routes>
        <Route path="/" element={<ListJob />} />
        <Route path="/detail-job" element={<DetailJob />} />
      </Routes>
    </div>
  );
}
export default App;

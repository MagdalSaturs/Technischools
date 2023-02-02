import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Biologia, Login, ListOfSubjects, Chemia, Historia } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/biologia" element={<Biologia />} />
          <Route path="/listOfSubjects" element={<ListOfSubjects />} />
          <Route path="/chemia" element={<Chemia />} />
          <Route path="/historia" element={<Historia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

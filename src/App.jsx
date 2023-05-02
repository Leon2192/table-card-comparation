import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableComponent from "./components/Table";
import CardComponent from "./components/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableComponent />}></Route>
          <Route path="/card" element={<CardComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

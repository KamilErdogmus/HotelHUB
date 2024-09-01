import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Create />} path="admin/create" />
        <Route element={<Detail />} path="/place/:id" />
      </Routes>
    </>
  );
};

export default App;

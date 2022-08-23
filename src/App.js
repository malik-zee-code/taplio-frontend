import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  return (
    <div className="App w-full h-screen">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;

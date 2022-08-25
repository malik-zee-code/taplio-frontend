import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header/Header";
import LinkedIn from "./Pages/LinkedIn";
import Login from "./Pages/Login";
import Queue from "./Pages/Queue";
import Register from "./Pages/Register";
import Subscription from "./Pages/Subscription";

const App = () => {
  return (
    <div className="App w-full h-screen">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newBoard" element={<Subscription />} />
        <Route path="/cntlinkdIn" element={<LinkedIn />} />
        <Route path="/queue" element={<Queue />} />
      </Routes>
    </div>
  );
};

export default App;

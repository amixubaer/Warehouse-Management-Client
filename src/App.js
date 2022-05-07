import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import "react-toastify/dist/ReactToastify.css";
import Inventory from "./pages/Inventory/Inventory";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import ManageInventories from "./pages/Inventory/ManageInventories/ManageInventories";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
         <Route
          path="/manageInventories"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

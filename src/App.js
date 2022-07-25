import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import Navbar from "./components/Navbar";
import HomeTable from "./pages/home/HomeTable";
import Footer from "./components/Footer";
import Todos from "./pages/todos/Todos";
import { store } from "./network/store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<HomeTable />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

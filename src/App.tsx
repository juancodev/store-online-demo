import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import { Home } from "./components/Home";
import "./App.css";
import Login from "./login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

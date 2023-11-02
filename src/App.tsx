import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

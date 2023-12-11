import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/containers/Layout";
import { Home } from "@/components/Home";
import "@/App.css";
import { Login } from "@/login/Login";
import { Register } from "@/register/Register";
import { Checkout } from "@/checkout/Checkout";
import { NotFound } from "@/containers/NotFound";
import { MyAccount } from "./account/Account";
import { Pay } from "@/pay/Pay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

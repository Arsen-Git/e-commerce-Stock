import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Provider } from "react-redux";
import { store } from "../../store/store";

import { AnimatePresence } from "framer-motion";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Loading from "../loading/Loading";
import Ordered from "../ordered/Ordered";

const Homepage = lazy(() => import("../../pages/Homepage/Homepage"));
const SignPage = lazy(() => import("../../pages/SignPage/SignPage"));
const Marketplace = lazy(() => import("../../pages/Marketplace/Marketplace"));
const ProductPage = lazy(() => import("../../pages/ProductPage/ProductPage"));
const CartPage = lazy(() => import("../../pages/CartPage/CartPage"));
const Checkout = lazy(() => import("../../pages/Checkout/Checkout"));
const Page404 = lazy(() => import("../../pages/Page404/Page404"));
const Payment = lazy(() => import("../../pages/Payment/Payment"));
const Admin = lazy(() => import("../../pages/Admin/Admin"));
const Test = lazy(() => import("../../pages/test"));

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<SignPage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/sign" element={<SignPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/marketplace/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/order" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/ordered" element={<Ordered />} />
                <Route exact path="/admin0202" element={<Admin />} />
                <Route exact path="/test" element={<Test />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Products from "./pages/Products/Products"
import Cart from "./pages/Cart/Cart"
import Payment from "./pages/Payment/Payment"
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<Layout isNavigationOptions />} >
            <Route path="/" element={<Products />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
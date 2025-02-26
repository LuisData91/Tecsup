import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/ui/Navbar";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPages";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/ChekoutPage";
import RegisterPage from "./pages/RegisterPage";


const App = () => {

  return (
    <BrowserRouter>
     <AuthContextProvider> 
    <CartContextProvider>
      <Navbar/>
    <Routes>
    
        <Route path="/"element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="product/:id" element={<ProductDetailPage/>}/>
         <Route path="checkout" element={<CheckoutPage />} />
         <Route path="/register" element={<RegisterPage />} />
        
        
    </Routes>
    <ToastContainer />
    </CartContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App

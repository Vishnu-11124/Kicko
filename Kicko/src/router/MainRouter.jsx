import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../pages/Home"
import Products from "../pages/Products"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import SingleProduct from "../pages/SingleProduct"
import CartPage from "../pages/CartPage"


 const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element ={<MainLayout/>}>
            <Route index element= {<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:id" element={<SingleProduct/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/cart" element={<CartPage/>}/>
        </Route>
    )
)

export default route

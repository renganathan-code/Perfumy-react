//import navbar
import Navbar from "./components/Navbar";

//import searchbar
import Search from "./components/Search";

//import products
import Product from "./components/Products";

//import about
import About from "./components/About";

//import footer
import Footer from "./components/Footer";

function App()
{
    return(
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App

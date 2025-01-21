import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView";
import Navigation from "./components/Navigation";
import EditProductView from "./views/EditProductView";


const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/"element={<HomeView/>}/>
    <Route path="/createproduct" element={<CreateProductView/>}/>
    {/* cuando pondemos : referencia esto se recibe en el componente de la ruta */}
    <Route path="/editproduct/:id" element={<EditProductView/>}/>
    </Routes>
    
    </BrowserRouter>

  
  )
}

export default App

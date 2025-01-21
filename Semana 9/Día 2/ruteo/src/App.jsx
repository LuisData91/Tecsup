import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Inicio";
import Blog from "./Components/Blog";
import Info from "./Components/Info";

const App = () => {
  return (
    // BrowserRouter conecta y da contexto de la url a los demás componentes
    <BrowserRouter>
    {/* podemos seguir colocando JSX, ej una barra de navegación*/}
      <h1>MiApp</h1>
      <Routes>
        {/* para definir las rutas necesitas el componente Route, donde es obligatorio indicar la ruta(path) y el componente a mostrar(element) */}
        <Route path="/" element={<Inicio />} />
        <Route path="/bitacora" element={<Blog />} />
        {/* para poder utilizar parámetros en la url usamos :param */}
        <Route path="/info/:cat" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
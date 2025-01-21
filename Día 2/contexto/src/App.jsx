import {NumberContextProvider} from "./context/NumberContext";

import Padre from "./components/Padre"

const App = () => {
  return (
    <NumberContextProvider>
    <div>
      <h1>App</h1>
      <hr />
      <Padre titulo ="Bebidas">
      <h3> Contenido HTML dentro del components</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores facere, quis, tempore inventore quaerat perferendis error blanditiis corporis, vitae sit excepturi. Cum molestias ratione blanditiis commodi, voluptatibus maiores neque!</p>
      </Padre>


    </div>
    </NumberContextProvider>
  )
}

export default App

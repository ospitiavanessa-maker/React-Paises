//Dependencia para trabajar
//Estados(variables reactivas) en React
import { useState } from "react";
import type { Tarea } from "./interfaces/Form";
import ListaTareas from "./components/ListaTareas";
import FormTareas from "./components/FormTareas";

function App() {


  const [ listaTareas , setListaTareas ] = useState<Tarea[]>([])

//prop drilling:
//enviar funciones que
//modifican el estados
//desde el componente 
// principal (App)
//a un componente hijo 
// (FormTareas)
const agregarTarea = (titulo:string,
                      prioridad: string
                      ) => {
      const nuevaTarea: Tarea ={
        titulo: titulo,
        prioridad: prioridad
      }
          setListaTareas ((prev) => ([...prev , ]))
}
  return (
  <>
      <FormTareas agregarTarea={agregarTarea} />
      <ListaTareas listika={listaTareas} />
  </>
)
}
export default App
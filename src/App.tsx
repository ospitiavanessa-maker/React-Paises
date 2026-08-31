//Dependencias para trabajar
//Estados (Variables reactivas) en React
import { useState } from "react";
import type { Tarea } from "./interfaces/Form";

function App() {


  
  //una variable vinculada ala componente 
  // y que puede reaccionar 
  // ante cualquier cambio en el componente (eventos, enderizados etc)
  //a una variable reactiva se asignan y 
  // se actualizan valores
  //este concepto se trabaja en todos los grandes frameworks (Vue,Angular,Svelte,React,Next.js,Solid)
const [tarea , setTarea ] = useState<Tarea>({
                                              titulo: "",
                                              prioridad: ""
                                              })
const [ listaTareas, setListaTareas ] = useState<Tarea[]>([])

listaTareas.map((t: Tarea, index) => (
  <tr key={index}>
    <td>{t.titulo}</td>
    <td>{t.prioridad}</td>
  </tr>
))

//gestion del eventocambio
//se utiliza una variable cap
//el control y sus propiedades
const cambiar = (e:any) => {
  console.log(e.target.value)
  //asignar en dos variables:
  //los nombres y valor del control
  const {name, value } = e.target
  console.log (name, value)


//asignar el estado con lo que
//este en el formulario
//se hace con el operador "spread"
  setTarea ({
    ...tarea,
    [name] : value
  })
}

  //funcion del submit
  const guardarTarea = (e:any) => {
    //prevenir submit por defecto
    e.preventDefault()
    //asignarla nueva tarea a
    //la lista de tareas
    setListaTareas(
      [
        ...listaTareas,
        tarea
      ]
    )
  }


  return (
    <>
    <div className="header">Panel de tareas</div>
    <div className="contenedor">
      <section className="formulario">
        <h2>Nueva Tarea</h2>
        <form onSubmit={guardarTarea}>
          <label htmlFor="Titulo">Titulo:</label>
          <input
              name="titulo"
              id="Titulo"
              onChange={cambiar} 
              type="text" />

          <label htmlFor="prioridad">Prioridad</label>
          <select name="prioridad"
                  id="prioridad"
                  onChange={cambiar}>
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>    
          </select>

          <button type="submit">Guardar tarea</button>
        </form>
      </section>
      {/*aqui va lista tareas*/}
      <section className="lista">
        <h2>Lista de Tareas</h2>
        <table className="comicGreen">
          <thead>
            <tr>
              <th>titulo</th>
              <th>prioridad</th>
            </tr>
          </thead>
          <tbody>
            {
              listaTareas.map((t:Tarea, index)=>(
                <tr key={index}>
                  <td>{t.titulo}</td>
                  <td>{t.prioridad}</td>
                </tr>
              ))
            }
          </tbody>
          <tfoot></tfoot>
        </table>
      </section>
    </div>
    </>
  )};
export default App;
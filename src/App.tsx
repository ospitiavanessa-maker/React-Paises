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
    <div>Panel de tareas</div>
    {/*aqui va formulario*/}
    <section>
      <form onSubmit={guardarTarea} >
        <h2>Nueva Tarea</h2>
        <div>
          <label htmlFor="Titulo"> titulo:</label>
          <input
              name="titulo"
              id="Titulo"
              onChange={cambiar} 
              type="text" />
        </div>
        <div>
          <label htmlFor="">Prioridad</label>
          <select name="prioridad"
                  id="prioridad"
                  onChange={cambiar}>
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>    
          </select>
        </div>
        <div>
          <button type="submit">
            Guardar tarea
          </button>
        </div>
      </form>
    </section>
    {/*aqui va lista tareas*/}
    <section>
      <h2>Lista de Tareas</h2>
      <table>
        <thead>
          <tr>
            <th>titulo</th>
            <th>prioridad</th>
          </tr>
        </thead>
        <tbody>
          {
            /* recorrer la lista de tareas*/
            listaTareas.map((t:Tarea)=>(
              <tr>
                <td>{t.titulo}</td>
                <td>{t.prioridad}</td>
              </tr>
            ))
          }
        </tbody>
        <tfoot></tfoot>
      </table>
    </section>
    </>
  )
}

export default App


//"table css generator" para poner estilo de tabla
//en el index.css

//para el formulario 
//Css form generator
//la tercera opcion
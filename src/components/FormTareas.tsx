import {useState} from 'react'
import type { Tarea } from '../interfaces/Form'

interface FormTareasProps{
    //se recibe una funcion:
    agregarTarea: (titulo:string,
                    prioridad:string) => void

const FormTareas = ({agregarTarea } : FormTareasProps) =>{

}

const FormTareas = () => {
    //
    //
    const [ tarea , setTarea ] = useState<Tarea>({
                          titulo: "",
                          prioridad: ""
                                    })
 const cambiar = (e:any) => {
    console.log(e.target.value)

    const {name ,value } = e.target
    setTarea({
      ...tarea,
      [name] : value
    })
  }
  const guardarTarea = (e: any) => {
      //prevenir submit por defecto
      e.preventDefault()
      //asignar la nueva tarea a
      //la lista de tareas
        agregarTarea(tarea.titulo, tarea.prioridad)
        //dejar el form en blanco
        setTarea({
          titulo: "",
          prioridad: "Baja"
  })
  
  return (
         <section className="formulario">
        <form onSubmit={guardarTarea}>
          <h2>Nueva tarea</h2>
          <div>
            <label htmlFor="titulo">Titulo:</label>
            <input 
              id="titulo"
              name="titulo"
              onChange={cambiar}
              type="text" />
          </div>
          <div>
            <label htmlFor="prioridad">Prioridad</label>
            <select name="prioridad" id="prioridad" onChange={cambiar}>
              <option>Alta</option>
              <option>Media</option>
              <option>Baja</option>
            </select>
          </div>
          <div>
            <button type="submit">Guardar tarea</button>
          </div>
        </form>
      </section>
  )
}

export default FormTareas

function agregarTarea(titulo: string, prioridad: string) {
        throw new Error('Function not implemented.')
    }

import type { Tarea } from '../interfaces/Form'
import ItemTarea from './ItemTarea'

interface ListaTareasProps{
    listika : Tarea[]
}

const ListaTareas = ( { listika} : ListaTareasProps ) => {
  return (
    /* Agregamos className="lista" aquí */
    <section className="lista">
      <h2>Lista de Tareas</h2>

      {/* Agregamos className="comicGreen" a la tabla */}
      <table className="comicGreen">
        <thead>
          <tr>
            <th>titulo</th>
            <th>Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {
            listika.map((t: Tarea) => (
                <ItemTarea t={t}/>
            ))
        }
        </tbody>
        <tfoot></tfoot>
      </table>
    </section>
  )
}

export default ListaTareas
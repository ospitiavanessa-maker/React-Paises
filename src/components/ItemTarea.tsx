import type 
{ Tarea } from "../interfaces/Form"

interface ItemTareaProps {
    t:Tarea
}

const ItemTarea = ( { t } : 
                    ItemTareaProps ) => {
    return (
        <tr>
            <td>{ t.titulo }</td>
            <td>{ t.prioridad}</td>
        </tr>
    )
} 
export default ItemTarea
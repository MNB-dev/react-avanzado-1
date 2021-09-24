import * as tipos  from "./action-types"

export function actAgregarTarea(nombre){
    return {
        type: tipos.ACT_AGREGAR_TAREA,
        nombre: nombre
    }
}
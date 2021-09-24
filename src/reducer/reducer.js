import * as tipos from "../actions/action-types"
export default function reducer(state, action) 
{ //no permite llamadas async
    let newState = { ...state};
    
    switch(action.type) {
        case tipos.ACT_AGREGAR_TAREA:
            newState.tareas = [
                ...state.tareas,
                {
                    id: state.tareas.length +1,
                    nombre: action.nombre,
                    done: false
                }
            ]
            break;
        default:
            console.log("HOLA ", action.type);
            break;
    }

    return newState;
}
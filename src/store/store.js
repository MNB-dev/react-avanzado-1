import { createStore } from 'redux';
import reducer from '../reducer/reducer';

const defaultData = {
    tareas: [
        {id: 1, nombre: "tarea default 1", done: false},
        {id: 2, nombre: "tarea default 2", done: false},
        {id: 3, nombre: "tarea default 3", done: false}
    ]
}

export default createStore(reducer, defaultData);
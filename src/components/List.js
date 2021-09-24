import "bootstrap/dist/css/bootstrap.css"
export default function List(props) {
  return (
    <ul className="list-group">
      <li className="list-group-item active text-center">Lista de tareas:</li>
      {props.tareas.map((tarea) => (
        <li key={tarea.id} className="list-group-item">{tarea.nombre}</li>
      ))}
    </ul>
  );
}

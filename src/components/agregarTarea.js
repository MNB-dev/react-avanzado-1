import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AgregarTarea extends Component {
  constructor(props) {
    super(props);
    this.state = { tarea: "" };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Agregar tarea"
          className="form-control mt-2"
          value={this.state.tarea}
          onChange={(evt) => this.setState({ tarea: evt.target.value })}
        ></input>
        <button
          className="btn btn-primary float-end mt-2"
          onClick={() => {
            this.props.agregarTarea(this.state.tarea);
            this.setState({ tarea: "" });
          }}
        >
          Agregar
        </button>
      </div>
    );
  }
}

export default AgregarTarea;

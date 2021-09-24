import List from "../components/List";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        tareas: state.tareas
    }
}

export default connect(mapStateToProps)(List);

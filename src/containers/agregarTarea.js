import AgregarTarea from "../components/agregarTarea";
import { connect } from "react-redux";
import * as creators from "../actions/action-creators"

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch){ 
    return {
        agregartarea : (n) => {
            let accion = creators.actAgregarTarea(n);
            dispatch(accion); //recibe una funcion y la hace llegar al reducer
        }
    }
}

//(null, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(AgregarTarea);
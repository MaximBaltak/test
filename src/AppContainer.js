import {connect} from "react-redux";
import App from "./App";

const mapStateToProps=(state)=>{
    return{
        value: state.window.openOrClose,
        valueList:state.window.value
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        openOrClose(){
            dispatch({type:'OPEN_CLOSE'})
        }
    }
}
const AppContainer=connect(mapStateToProps,mapDispatchToProps)(App)
export default  AppContainer
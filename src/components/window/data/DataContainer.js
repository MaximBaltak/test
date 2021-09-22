import {connect} from "react-redux";
import Data from "./Data";

const mapStateToProps=(state)=>{
    return{
        value: state.window.DataTextChange,
        one:state.window.one,
        check: state.window.check
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        add(){
            dispatch({type:'ADD'})
        },
        change(value){
            dispatch({
                type:'CHANGE_TEXT',
                text:value
            })
        }
    }
}
const DataContainer=connect(mapStateToProps,mapDispatchToProps)(Data)
export default  DataContainer
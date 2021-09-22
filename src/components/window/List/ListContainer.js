import {connect} from "react-redux";
import List from "./List";

const mapStateToProps=(state)=>{
    return{
        list: state.window.list

    }
}

const ListContainer=connect(mapStateToProps,null)(List)
export default  ListContainer
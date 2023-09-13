import { act } from "react-dom/test-utils";
import { createStore } from "redux";
const initialData = {
    initNumber: 0,
}

const reducer =( state=initialData,action)=>{
  if(action.type==='increment'){
    return {
        ...state,initNumber:state.initNumber+=1,
    }
  }
    return state;
}

const store = createStore(reducer)
export default store;
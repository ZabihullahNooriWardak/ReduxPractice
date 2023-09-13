
// import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    initNumber: 0,
}

const counterSlice = createSlice({
  name:'counter',
  initialState,
  reducers:{
    increment:(state)=>{
      // state={...state,initNumber:state.initNumber+=1}
      state.initNumber=state.initNumber+1;
    }
  }
})
export const{increment}=counterSlice.actions;
export default counterSlice.reducer;


// const reducer =( state=initialData,action)=>{
//   if(action.type==='increment'){
//     return {
//         ...state,initNumber:state.initNumber+=1,
//     }
//   }
//   if(action.type==='decrement'){
//     return{
//       ...state,initNumber:state.initNumber-=1
//     }
//   }
//     return state;
// }

// const store = createStore(reducer)
// export default store;
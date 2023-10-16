import {configureStore , createSlice} from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name : "data",
    initialState : {data:[]},
    reducers : {
        addtodata (state,action) {
            console.log(action.payload)
            let existingdata = state.data.find((item) => item === action.payload)
            if (existingdata) {
                return ;
            }
            else {
                state.data.unshift(action.payload)
            }
        },
        deletedata(state,action){
            state.data = state.data.filter(item => {
                if (item.startdate === action.payload.start && item.enddate === action.payload.end) {
                    return false
                }
                return true;
            })
        }
    }
})


const store = configureStore({
    reducer : {
        data : dataSlice.reducer
    }
})

export const dataActions = dataSlice.actions
export default store 
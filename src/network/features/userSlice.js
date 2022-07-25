import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    user : false,
    userName : ""
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        login : (state,action) => {
            state.user = true
            state.userName = action.payload
        },
        logout : (state) => {
            state.user = false
            state.userName = ""
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer
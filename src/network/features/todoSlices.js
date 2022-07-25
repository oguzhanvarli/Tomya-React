import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { API_URL } from '../env/config';

export const fetchTodos = createAsyncThunk('todos/fetchPosts', async () => {
    const response = await axios.get(API_URL+'/todos');
    return response.data;
  });

const initialState = {
    todos : [],
    status : 'idle'
}
export const todosSlice = createSlice({
    name : 'todos',
    initialState,
    reducers:{
        addTodo : (state,action) => {
            state.todos.unshift(action.payload)
        },
        deleteTodo : (state,action) => {
            state.todos = state.todos.filter((element) => {
                return element.id != action.payload.id
            })
        },
        changeTodo : (state,action) => {
            state.todos = state.todos.filter((element) => {
                if(element.title === action.payload.title){
                    element.completed = !element.completed
                }
                return element
            })
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchTodos.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.todos = state.todos.concat(action.payload)
        })
    }
})
export const getAllTodos = (state) => state.todos.todos
export const getStatus = (state) => state.todos.status

export const {addTodo, deleteTodo,changeTodo} = todosSlice.actions

export default todosSlice.reducer
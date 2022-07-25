import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todoSlices'
import userReducer from '../features/userSlice'
export const store = configureStore({
  reducer: {
    todos : todosReducer,
    user : userReducer,
  },
  //used middleware for fetch state.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
})
import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [{id: 1,
        text: "Hello world"
    }]
}

// slice is a bigger version of reducer
// reducer is a functionality
// reducer  contains properties and functions

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // in context api we always declare fucntion , but in redux we can declare a function with its definition...
        // in this method we always get access of two things ( state , action  )
        // state will give access of current state
        // action provide value (id , etc...) for perform functionality such as adding or removing todo...
        addTodo: (state, action) => {
            const todo = {
                // id: Date.now(),        // this method is used in context api , but redux provide us nanoid() for creating unique id value
                id: nanoid(),
                text: action.payload      // text: action.payload.text => does'nt need mentioning text 2 time because key and value both having same name
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if(todo) {
               todo.text = text;
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;


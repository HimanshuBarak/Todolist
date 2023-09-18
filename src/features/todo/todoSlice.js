import {createSlice,nanoid} from '@reduxjs/toolkit'

//so for each feature that we need to keeo track of the state of the
/**

we maintain a slice , a slice is something that interactes with the store

a slice we will contain the necessary intialstate of the feature and
also reducers(methods to modify the state)
*/

const initialState = {
    todos:[],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            // state link to the intial state
            // action brings in the payload
            
            //now we  define the object that we want to add
            const todo = {
                id:nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        // here action.payload will contain hte id of the node to be deleted
        removeTodo : (state,action)=>{
           state.todos = state.todos.filter(todo=> todo.id!==action.payload)
        }
    }
})

// exporting the reducers as actions as we will need to call them from the
// the components
export const  {addTodo, removeTodo} = todoSlice.actions

// this is export to inform the store of the reducer
export default todoSlice.reducer
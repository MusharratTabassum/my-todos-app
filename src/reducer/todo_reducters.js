const initializeData = {
    alltodos: []     //array to store all the todo-list 
}


const todoReducers = (state = initializeData, action) => {
    switch (action.type) {
        case "ADD":
            const { id, data } = action.payload;
            return {
                ...state, //getting all the initialize data
                alltodos: [
                    ...state.alltodos,
                    {
                        id: id,
                        data: data
                    }]
            }

        case "DELETE":

            const newlist = state.alltodos.filter(elem => elem.id != action.id)
            return {
                ...state, //getting all the initialize data
                alltodos: newlist //updating the whole list

            }
        default: return state
    }
}
export default todoReducers;

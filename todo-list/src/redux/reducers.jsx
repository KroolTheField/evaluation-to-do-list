const initialState = {
    tasks: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        // Add other cases for modifying, deleting, or validating tasks
        default:
            return state;
    }
};

export default rootReducer;

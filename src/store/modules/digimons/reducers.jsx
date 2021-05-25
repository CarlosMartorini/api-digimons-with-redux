import { ADD_DIGIMONS } from './actionsTypes'; 

const reducersDigimons = (state = [], action) => {
    switch (action.type) {
        case ADD_DIGIMONS:
            
            return [...state, action.payload];
    
        default:
            
        return state;
    }
}

export default reducersDigimons;
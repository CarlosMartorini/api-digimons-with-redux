import { ADD_DIGIMONS } from './actionsTypes'; 

const reducersDigimons = (state = [], action) => {
    switch (action.type) {
        
        case ADD_DIGIMONS:
            
            const { digimon } = action;
            return digimon;
            
        default:
            
            return state;
    }
}

export default reducersDigimons;
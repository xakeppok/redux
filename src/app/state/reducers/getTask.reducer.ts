import { ActionTypes, Union } from '../actions/getTasks.action';
 
export const initialState = {};

export function reducer(state = initialState, action: Union) {
    switch (action.type) {
        case ActionTypes.GET_TASKS_SUCCESS:
            return action.payload;
        case ActionTypes.GET_TASKS:
                console.log('hi boris');
                return state;
        default:
            return state;
    }
}

import { ActionTypes, Union } from '../actions/getTasks.action';
import { ActionTypesPut, Union1 } from '../actions/putTasks.action';
import { Union2, ActionTypesDelete } from '../actions/deleteTask.action';
 
export const initialState = {
    tasks: [],
    subtasks: []
};

export function reducer(state = initialState, action: Union | Union1 | Union2) {
    switch (action.type) {
        case ActionTypesDelete.DELETE_TASK:
            return state;
        case ActionTypesDelete.DELETE_TASK_SUCCESS:
            return action.payload;
        case ActionTypesPut.PUT_TASKS:
            return state;
        case ActionTypesPut.PUT_TASKS_SUCCESS:
            return action.payload;
        case ActionTypes.GET_TASKS_SUCCESS:
            return action.payload;
        case ActionTypes.GET_TASKS:
                return state;
        default:
            return state;
    }
}

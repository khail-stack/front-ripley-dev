import {
    ADD_CUSTOMERS_REQUEST,
    ADD_CUSTOMERS_SUCCESS,
    ADD_CUSTOMERS_ERROR
} from './actionTypes';

interface State {
    error: boolean;
    message: string;
    isFetching: boolean;
    data: Record<string, any>
}

interface Action {
    type: string;
    payload: any
}

const initialState: State = {
    error: false,
    message: '',
    isFetching: false,
    data: {}
};

export function addCustomer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ADD_CUSTOMERS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case ADD_CUSTOMERS_ERROR:
            return {
                ...state,
                error: true,
                isFetching: false,
                message: state.message
            };
        case ADD_CUSTOMERS_SUCCESS:
            return {
                ...state,
                error: false,
                isFetching: false,
                message: '',
                data: action.payload
            };
        default:
            return state;
    }
}
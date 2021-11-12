import {
    DELETE_CUSTOMERS_REQUEST,
    DELETE_CUSTOMERS_SUCCESS,
    DELETE_CUSTOMERS_ERROR
} from './actionTypes';

interface State {
    error: boolean;
    message: string;
    isFetching: boolean;
    data: [];
}

interface Action {
    type: string;
    payload: any
}

const initialState: State = {
    error: false,
    message: '',
    isFetching: false,
    data: []
};

export function deleteCustomer(state: State = initialState, action: Action) {
    switch (action.type) {
        case DELETE_CUSTOMERS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case DELETE_CUSTOMERS_ERROR:
            return {
                ...state,
                error: true,
                isFetching: false,
                message: state.message
            };
        case DELETE_CUSTOMERS_SUCCESS:
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
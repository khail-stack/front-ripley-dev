import {
    GET_CUSTOMERS_REQUEST,
    GET_CUSTOMERS_SUCCESS,
    GET_CUSTOMERS_ERROR
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

export function customers(state: State = initialState, action: Action) {
    switch (action.type) {
        case GET_CUSTOMERS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case GET_CUSTOMERS_ERROR:
            return {
                ...state,
                error: true,
                isFetching: false,
                message: state.message
            };
        case GET_CUSTOMERS_SUCCESS:
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
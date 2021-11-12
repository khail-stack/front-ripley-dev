import {
    AVERAGE_CUSTOMERS_REQUEST,
    AVERAGE_CUSTOMERS_SUCCESS,
    AVERAGE_CUSTOMERS_ERROR
} from './actionTypes';

interface State {
    error: boolean;
    message: string;
    isFetching: boolean;
    data: Record<string, any>;
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

export function averageCustomer(state: State = initialState, action: Action) {
    switch (action.type) {
        case AVERAGE_CUSTOMERS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case AVERAGE_CUSTOMERS_ERROR:
            return {
                ...state,
                error: true,
                isFetching: false,
                message: state.message
            };
        case AVERAGE_CUSTOMERS_SUCCESS:
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
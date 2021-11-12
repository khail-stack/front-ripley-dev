import {
    AVERAGE_GENDER_REQUEST,
    AVERAGE_GENDER_SUCCESS,
    AVERAGE_GENDER_ERROR
} from './actionTypes';

interface State {
    error: boolean;
    message: string;
    isFetching: boolean;
    data: any
}

interface Action {
    type: string;
    payload: any
}

const initialState: State = {
    error: false,
    message: '',
    isFetching: false,
    data: null
};

export function averageGenderCustomer(state: State = initialState, action: Action) {
    switch (action.type) {
        case AVERAGE_GENDER_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case AVERAGE_GENDER_ERROR:
            return {
                ...state,
                error: true,
                isFetching: false,
                message: state.message
            };
        case AVERAGE_GENDER_SUCCESS:
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
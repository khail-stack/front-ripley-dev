import { customerService } from '../../services/customer';
import { AverageResponse } from '../../services/customer/models';
import Notification, { type } from '../../shared/toast/Toast';
import {
    AVERAGE_CUSTOMERS_REQUEST,
    AVERAGE_CUSTOMERS_SUCCESS,
    AVERAGE_CUSTOMERS_ERROR
} from './actionTypes';

const fetchAverageCustomersRequest = () => ({
    type: AVERAGE_CUSTOMERS_REQUEST
})

const fetchAverageCustomersSuccess = (data: AverageResponse) => ({
    type: AVERAGE_CUSTOMERS_SUCCESS,
    payload: data
})

const fetchAverageCustomersError = (message: any) => ({
    type: AVERAGE_CUSTOMERS_ERROR,
    payload: message
})

export const fetchAverageCustomer = () => {
    return async (dispatch : any) => {
        dispatch(fetchAverageCustomersRequest());
        try {
            const response = await customerService.getAverage();
            dispatch(fetchAverageCustomersSuccess(response))
        } catch (error) {
            dispatch(fetchAverageCustomersError((error as Error).message))
            Notification(type.danger, 'Ha ocurrido un error')
        }
    }
}

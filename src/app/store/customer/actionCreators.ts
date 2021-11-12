import { customerService } from '../../services/customer';
import { ListCustomerResponse } from '../../services/customer/models';
import {
    GET_CUSTOMERS_REQUEST,
    GET_CUSTOMERS_SUCCESS,
    GET_CUSTOMERS_ERROR
} from './actionTypes';

const fetchGetCustomersRequest = () => ({
    type: GET_CUSTOMERS_REQUEST
})

const fetchGetCustomersSuccess = (data: ListCustomerResponse) => ({
    type: GET_CUSTOMERS_SUCCESS,
    payload: data.customers
})

const fetchGetCustomersError = (message: any) => ({
    type: GET_CUSTOMERS_ERROR,
    payload: message
})

export const fetchGetCustomer = () => {
    return async (dispatch : any) => {
        dispatch(fetchGetCustomersRequest());
        try {
            const response = await customerService.listCustomers();
            dispatch(fetchGetCustomersSuccess(response))
        } catch (error) {
            dispatch(fetchGetCustomersError((error as Error).message))
        }
    }
}
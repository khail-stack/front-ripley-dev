import { customerService } from '../../services/customer';
import { Customer } from '../../services/customer/models';
import Notification, { type } from '../../shared/toast/Toast';
import {
    UPDATE_CUSTOMERS_REQUEST,
    UPDATE_CUSTOMERS_SUCCESS,
    UPDATE_CUSTOMERS_ERROR
} from './actionTypes';

const fetchUpdateCustomersRequest = () => ({
    type: UPDATE_CUSTOMERS_REQUEST
})

const fetchUpdateCustomersSuccess = (data: Customer) => ({
    type: UPDATE_CUSTOMERS_SUCCESS,
    payload: data
})

const fetchUpdateCustomersError = (message: any) => ({
    type: UPDATE_CUSTOMERS_ERROR,
    payload: message
})

export const fetchUpdateCustomer = (id : number, customer: Customer, callback = () => null) => {
    return async (dispatch : any) => {
        dispatch(fetchUpdateCustomersRequest());
        try {
            const response = await customerService.updateCustomers(id, customer);
            dispatch(fetchUpdateCustomersSuccess(response))
            callback()
        } catch (error) {
            dispatch(fetchUpdateCustomersError((error as Error).message))
            Notification(type.danger, 'Ha ocurrido un error')
        }
    }
}
import { customerService } from '../../services/customer';
import { AddCustomerRequest, Customer } from '../../services/customer/models';
import Notification, { type } from '../../shared/toast/Toast';
import {
    ADD_CUSTOMERS_REQUEST,
    ADD_CUSTOMERS_SUCCESS,
    ADD_CUSTOMERS_ERROR
} from './actionTypes';

const fetchAddCustomersRequest = () => ({
    type: ADD_CUSTOMERS_REQUEST
})

const fetchAddCustomersSuccess = (data: Customer) => ({
    type: ADD_CUSTOMERS_SUCCESS,
    payload: data
})

const fetchAddCustomersError = (message: any) => ({
    type: ADD_CUSTOMERS_ERROR,
    payload: message
})

export const fetchAddCustomer = (customer: AddCustomerRequest, callback = () => null) => {
    return async (dispatch : any) => {
        dispatch(fetchAddCustomersRequest());
        try {
            const response = await customerService.addCustomers(customer);
            dispatch(fetchAddCustomersSuccess(response))
            callback()
        } catch (error) {
            dispatch(fetchAddCustomersError((error as Error).message))
            Notification(type.danger, "Ha ocurrido un error!")
        }
    }
}
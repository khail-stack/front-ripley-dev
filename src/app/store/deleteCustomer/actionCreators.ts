import { customerService } from '../../services/customer';
import { Customer, } from '../../services/customer/models';
import {
    DELETE_CUSTOMERS_REQUEST,
    DELETE_CUSTOMERS_SUCCESS,
    DELETE_CUSTOMERS_ERROR
} from './actionTypes';

const fetchDeleteCustomersRequest = () => ({
    type: DELETE_CUSTOMERS_REQUEST
})

const fetchDeleteCustomersSuccess = (data: Customer) => ({
    type: DELETE_CUSTOMERS_SUCCESS,
    payload: data
})

const fetchDeleteCustomersError = (message: any) => ({
    type: DELETE_CUSTOMERS_ERROR,
    payload: message
})

export const fetchDeleteCustomer = (idCustomer: number, callback = () => null) => {
    return async (dispatch : any) => {
        dispatch(fetchDeleteCustomersRequest());
        try {
            const response = await customerService.deleteCustomers(idCustomer);
            dispatch(fetchDeleteCustomersSuccess(response))
            callback()
        } catch (error) {
            dispatch(fetchDeleteCustomersError((error as Error).message))
        }
    }
}
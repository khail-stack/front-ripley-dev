import { customerService } from '../../services/customer';
import { AverageMaleFemaleResponse } from '../../services/customer/models';
import Notification, { type } from '../../shared/toast/Toast';
import {
    AVERAGE_GENDER_REQUEST,
    AVERAGE_GENDER_SUCCESS,
    AVERAGE_GENDER_ERROR
} from './actionTypes';

const fetchAverageGenderRequest = () => ({
    type: AVERAGE_GENDER_REQUEST
})

const fetchAverageGenderSuccess = (data: AverageMaleFemaleResponse) => ({
    type: AVERAGE_GENDER_SUCCESS,
    payload: data
})

const fetchAverageGenderError = (message: any) => ({
    type: AVERAGE_GENDER_ERROR,
    payload: message
})

export const fetchAverageGenderCustomer = () => {
    return async (dispatch : any) => {
        dispatch(fetchAverageGenderRequest());
        try {
            const response = await customerService.getAverageMaleFemale();
            dispatch(fetchAverageGenderSuccess(response))
        } catch (error) {
            dispatch(fetchAverageGenderError((error as Error).message))
            Notification(type.danger, 'Ha ocurrido un error')
        }
    }
}

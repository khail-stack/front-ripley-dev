import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import Notification, { type } from '../../../../shared/toast/Toast'
import { fetchDeleteCustomer } from '../../../../store/deleteCustomer'

interface Props {
    setDeleteModal : Function,
    idCustomer: number,
    fetchGetData: () => void
}

const DeleteCustomerModal: React.FC<Props> = ({setDeleteModal, idCustomer, fetchGetData}) => {

    const dispatch = useDispatch()

    const callback : any = () => {
        setDeleteModal(false)
        Notification(type.success, "Cliente eliminado correctamente!")
    }

    const handleSubmitDelete = async (e: FormEvent) => {
        e.preventDefault()
        await dispatch(fetchDeleteCustomer(idCustomer!, callback))
        fetchGetData()
    }

    return (
        <div>
            <p> ¿Esta seguro de eliminar al cliente? </p>
            <div>
                <button onClick={() => setDeleteModal(false)} > Cancelar </button>
                <button onClick={handleSubmitDelete} > Eliminar </button>
            </div>
        </div>
    )
}

export default DeleteCustomerModal

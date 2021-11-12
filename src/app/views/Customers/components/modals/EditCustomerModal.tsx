import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Customer } from '../../../../services/customer'
import Notification, { type } from '../../../../shared/toast/Toast'
import { fetchUpdateCustomer } from '../../../../store/updateCustomer'

interface Props {
    setEditModal : Function,
    customer: Customer,
    fetchGetData: () => void
}
const EditCustomerModal: React.FC<Props> = ({setEditModal, customer, fetchGetData}) => {
    
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: customer.name,
        lastname: customer.lastname,
        birthdate: customer.birthdate
    })

    const {name, lastname, birthdate} = data

    const onChangeInputs = (e:any) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    };

    const callback : any = () => {
        setEditModal(false)
        Notification(type.success, "Cliente actualizado correctamente!")
    }

    const handleSubmitEdit = async (e: FormEvent) => {
        e.preventDefault()
        await dispatch(fetchUpdateCustomer(customer.id!, data, callback))
        fetchGetData()
    }
    
    return (
        <form onSubmit={handleSubmitEdit}>
            <div>
                <label htmlFor="">
                    <p>Nombre:</p>
                    <input name="name" type="text" value={name} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label htmlFor="">
                    <p>Apellido:</p>
                    <input name="lastname" type="text" value={lastname} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label htmlFor="">
                    <p>Fecha de nacimiento:</p>
                    <input name="birthdate" type="date" value={birthdate} onChange={onChangeInputs} required autoComplete="off" />
                </label>
            </div>
            <div>
                <button type="button" onClick={() => setEditModal(false)}> Cancelar </button>
                <button type="submit"> Guardar </button>
            </div>
        </form>
    )
}

export default EditCustomerModal

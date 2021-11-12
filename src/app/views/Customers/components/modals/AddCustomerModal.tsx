import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import Notification, { type } from '../../../../shared/toast/Toast'
import { fetchAddCustomer } from '../../../../store/addCustomer'

interface Props {
    setAddModal: Function,
    fetchGetData: () => void,
}

const AddCustomerModal: React.FC<Props> = ({setAddModal, fetchGetData}) => {

    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: '',
        lastname: '',
        birthdate: ''
    })
    const {name, lastname, birthdate} = data

    const onChangeInputs = (e:any) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    };

    const callback : any = () => {
        setAddModal(false)
        Notification(type.success, "Cliente agregado correctamente!")
    }

    const handleSubmitAdd = async (e: FormEvent) => {
        e.preventDefault()
        await dispatch(fetchAddCustomer(data, callback))
        fetchGetData()
    }

    return (
        <form onSubmit={handleSubmitAdd}>
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
                <button type="button" onClick={() => setAddModal(false)}> Cancelar </button>
                <button type="submit"> Agregar </button>
            </div>
        </form>
    )
}

export default AddCustomerModal

import React, { useState } from 'react'
import ContainerModal from '../../../shared/modal/ContainerModal'
import DeleteCustomerModal from './modals/DeleteCustomerModal'
import EditCustomerModal from './modals/EditCustomerModal'
import edit from './../../../static/edit.svg'
import trash from './../../../static/trash.svg'
import { Customer } from '../../../services/customer'

interface Props { 
    customer: Customer,
    fetchGetData: () => void,
    index: number
}
const TableListItem: React.FC<Props> = ({customer, fetchGetData, index}) => {
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    return (
        <>
            <tr>
                <td>{index+1}</td>
                <td>{customer.name}</td>
                <td>{customer.lastname}</td>
                <td>{customer.birthdate}</td>
                <td>
                    <span className="noselect">
                        <img src={edit} alt="edit" onClick={() => setEditModal(true)} />
                        <img src={trash} alt="delete" onClick={() => setDeleteModal(true)} />
                    </span>
                </td>
            </tr>  
            <ContainerModal showModal={deleteModal} setShowModal={setDeleteModal} title="Eliminar cliente">
                <DeleteCustomerModal setDeleteModal={setDeleteModal} idCustomer={customer.id!} fetchGetData={fetchGetData} />
            </ContainerModal>
            <ContainerModal showModal={editModal} setShowModal={setEditModal} title="Editar cliente">
                <EditCustomerModal setEditModal={setEditModal} customer={customer} fetchGetData={fetchGetData} />
            </ContainerModal>
        </>
    )
}

export default TableListItem

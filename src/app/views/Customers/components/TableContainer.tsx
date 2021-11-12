import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Customer } from '../../../services/customer'
import Spinner from '../../../shared/spinner/Spinner'
import { getCustomersData, getCustomersIsFetching } from '../../../store/customer'
import TableListItem from './TableListItem'

interface Props {
    fetchGetData: () => void,
}

const TableContainer: React.FC<Props> = ({fetchGetData}) => {
    const customers = useSelector(getCustomersData)
    const isLoading = useSelector(getCustomersIsFetching)
    return (
        <div className="table_container">
            <table id="tableCustomer" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Fecha de nacimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? 
                        <tr>
                            <td className="container_loader" colSpan={5}> <Spinner /> </td>
                        </tr> :
                        customers.length ? customers.map((customer: Customer, index: number) => (
                            <Fragment key={customer.id}>
                                <TableListItem customer={customer} index={index} fetchGetData={fetchGetData}/>
                            </Fragment>
                        )) : <tr><td colSpan={5}> No hay clientes</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableContainer

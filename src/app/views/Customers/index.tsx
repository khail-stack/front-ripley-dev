import React, { useState } from 'react'
import TableContainer from './components/TableContainer'
import './styles.sass'
import plusCircle from './../../static/plus-circle.svg'
import search from './../../static/search_small.svg'
import ContainerModal from '../../shared/modal/ContainerModal'
import AddCustomerModal from './components/modals/AddCustomerModal'
import { useDispatch } from 'react-redux'
import { fetchGetCustomer } from '../../store/customer/actionCreators'
import AverageAgeModal from './components/modals/AverageAgeModal'


const CustomersView = () => {
    const [addModal, setAddModal] = useState(false)
    const [avgModal, setAvgModal] = useState(false)
    const dispatch = useDispatch()

    const fetchGetData = React.useCallback(()=> {
        dispatch(fetchGetCustomer())
    }, [dispatch])

    React.useEffect(()=>{
        fetchGetData()
    }, [fetchGetData])

    return (
        <div className="customer_view_container" >
            <h2>Lista de clientes</h2>
            <div className="customer_head">
                <button onClick={() => setAvgModal(true)}> <img src={search} alt="search" /> Calcular promedio </button>
                <button onClick={() => setAddModal(true)}> <img src={plusCircle} alt="AddIcon" /> Agregar cliente </button>
            </div>
            <TableContainer fetchGetData={fetchGetData} />
            <ContainerModal showModal={addModal} setShowModal={setAddModal} title="Agregar cliente">
                <AddCustomerModal setAddModal={setAddModal} fetchGetData={fetchGetData} />
            </ContainerModal>
            <ContainerModal showModal={avgModal} setShowModal={setAvgModal} title="Promedio de edades">
                <AverageAgeModal setAvgModal={setAvgModal} />
            </ContainerModal>
        </div>
    )
}

export default CustomersView


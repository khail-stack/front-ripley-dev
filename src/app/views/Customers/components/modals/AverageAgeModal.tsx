import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../../shared/spinner/Spinner'
import { fetchAverageCustomer, getAverageCustomersData, getAverageCustomersIsFetching } from '../../../../store/average'

interface Props {
    setAvgModal: Function
}

const AverageAgeModal: React.FC<Props> = ({setAvgModal}) => {

    const dispatch = useDispatch()
    const isLoading = useSelector(getAverageCustomersIsFetching)
    const average = useSelector(getAverageCustomersData)

    React.useEffect(() => {
        dispatch(fetchAverageCustomer())
    }, [dispatch])

    return (
        <div>
            {
                isLoading ? 
                <>
                    <p> Calculando promedio ... </p>
                    <div style={{display: 'block'}}>
                        <Spinner /> 
                    </div>
                </> : 
                <>
                    <p> El promedio de edades es: {average.avg} </p>
                    <small>*Nota: El promedio esta redondeado a un valor entero</small>
                    <div style={{display: 'block'}}>
                        <button onClick={() => setAvgModal(false)} > Aceptar </button>
                    </div>
                </>
            }
            
        </div>
    )
}

export default AverageAgeModal

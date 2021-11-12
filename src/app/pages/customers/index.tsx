import React from 'react'
import CustomersView from '../../views/Customers'
import { Provider } from 'react-redux'
import { initStore } from '../../views/Customers/store/initStore'

const store = initStore({})

const CustomersPage = () => {
    return (
        <Provider store={store}>
            <CustomersView />
        </Provider>
    )
}

export default CustomersPage

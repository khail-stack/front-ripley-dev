import React from 'react'
import { Provider } from 'react-redux'
import { initStore } from '../../views/Dashboard/store/initStore'
import DashboardView from '../../views/Dashboard'

const store = initStore({})

const DashboardPage = () => {
    return (
        <Provider store={store}>
            <DashboardView />
        </Provider>
    )
}

export default DashboardPage

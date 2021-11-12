import { configureStore } from "../../../store/configureStore";
import { customers } from "../../../store/customer";
import { addCustomer } from "../../../store/addCustomer";
import { deleteCustomer } from "../../../store/deleteCustomer";
import { updateCustomer } from "../../../store/updateCustomer";
import { averageCustomer } from "../../../store/average";
import { PreloadedState } from "redux";
import { RootStateOrAny } from "react-redux";

export function initStore(preloadedState: PreloadedState<RootStateOrAny>) {
    return configureStore(
        {
            customers,
            addCustomer,
            deleteCustomer,
            updateCustomer,
            averageCustomer,
        },
        preloadedState
    )
}
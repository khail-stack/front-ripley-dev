import { configureStore } from "../../../store/configureStore";
import { averageGenderCustomer } from "../../../store/dashboard";
import { PreloadedState } from "redux";
import { RootStateOrAny } from "react-redux";

export function initStore(preloadedState: PreloadedState<RootStateOrAny>) {
    return configureStore(
        {
            averageGenderCustomer
        },
        preloadedState
    )
}
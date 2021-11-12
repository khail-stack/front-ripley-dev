import { RootStateOrAny } from "react-redux";
import { applyMiddleware, combineReducers, createStore, PreloadedState } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export function configureStore(reducers: any, preloadedState: PreloadedState<RootStateOrAny>) {
    const enhancer = composeWithDevTools(applyMiddleware(thunk))
    return createStore(
        combineReducers({...reducers}),
        preloadedState,
        enhancer
    )
}
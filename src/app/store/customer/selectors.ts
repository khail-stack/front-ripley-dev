import { RootStateOrAny } from "react-redux";

export const getCustomersData = (state: RootStateOrAny) => state.customers.data;
export const getCustomersIsFetching = (state: RootStateOrAny) => state.customers.isFetching;
export const getCustomersError = (state: RootStateOrAny) => state.customers.error;
export const getCustomersMessage = (state: RootStateOrAny) => state.customers.message;
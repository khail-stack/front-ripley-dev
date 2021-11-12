import { RootStateOrAny } from "react-redux";

export const getUpdateCustomersData = (state: RootStateOrAny) => state.updateCustomer.data;
export const getUpdateCustomersIsFetching = (state: RootStateOrAny) => state.updateCustomer.isFetching;
export const getUpdateCustomersError = (state: RootStateOrAny) => state.updateCustomer.error;
export const getUpdateCustomersMessage = (state: RootStateOrAny) => state.updateCustomer.message;
import { RootStateOrAny } from "react-redux";

export const getDeleteCustomersData = (state: RootStateOrAny) => state.deleteCustomer.data;
export const getDeleteCustomersIsFetching = (state: RootStateOrAny) => state.deleteCustomer.isFetching;
export const getDeleteCustomersError = (state: RootStateOrAny) => state.deleteCustomer.error;
export const getDeleteCustomersMessage = (state: RootStateOrAny) => state.deleteCustomer.message;
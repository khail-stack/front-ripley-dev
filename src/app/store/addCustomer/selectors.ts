import { RootStateOrAny } from "react-redux";

export const getAddCustomersData = (state: RootStateOrAny) => state.addCustomer.data;
export const getAddCustomersIsFetching = (state: RootStateOrAny) => state.addCustomer.isFetching;
export const getAddCustomersError = (state: RootStateOrAny) => state.addCustomer.error;
export const getAddCustomersMessage = (state: RootStateOrAny) => state.addCustomer.message;
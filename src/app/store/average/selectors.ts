import { RootStateOrAny } from "react-redux";

export const getAverageCustomersData = (state: RootStateOrAny) => state.averageCustomer.data;
export const getAverageCustomersIsFetching = (state: RootStateOrAny) => state.averageCustomer.isFetching;
export const getAverageCustomersError = (state: RootStateOrAny) => state.averageCustomer.error;
export const getAverageCustomersMessage = (state: RootStateOrAny) => state.averageCustomer.message;
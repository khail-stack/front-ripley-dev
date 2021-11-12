import { RootStateOrAny } from "react-redux";

export const getAverageGenderCustomersData = (state: RootStateOrAny) => state.averageGenderCustomer.data;
export const getAverageGenderCustomersIsFetching = (state: RootStateOrAny) => state.averageGenderCustomer.isFetching;
export const getAverageGenderCustomersError = (state: RootStateOrAny) => state.averageGenderCustomer.error;
export const getAverageGenderCustomersMessage = (state: RootStateOrAny) => state.averageGenderCustomer.message;
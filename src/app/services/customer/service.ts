import axios from "axios";
import { AddCustomerRequest, CustomerServiceResponse, Customer, ListCustomerResponse, AverageResponse, AverageMaleFemaleResponse } from "./models";

const url = 'https://ripley-back-dev.herokuapp.com/api/customers'

export const customerService = {
    async listCustomers(): Promise<ListCustomerResponse> {
        try {
            const { data } = await axios.get<ListCustomerResponse>(url)
            return data            
        } catch (error) {
            throw new Error("Error in service");
        }
    },
    async addCustomers(
        customer: AddCustomerRequest
    ): Promise<CustomerServiceResponse> {
        try {
            const { data } = await axios.post<CustomerServiceResponse>(url, customer)
            return data            
        } catch (error) {
            throw new Error("Error in service");
        }
    },
    async updateCustomers(
        id: number,
        customer: Customer
    ): Promise<CustomerServiceResponse> {
        try {
            const { data } = await axios.put<CustomerServiceResponse>(url+`/${id}`, customer)
            return data            
        } catch (error) {
            throw new Error("Error in service");
        }
    },
    async deleteCustomers(
        id: number
    ): Promise<CustomerServiceResponse> {
        try {
            const { data } = await axios.delete<CustomerServiceResponse>(url+`/${id}`)
            return data            
        } catch (error) {
            throw new Error("Error in service");
        }
    },
    async getAverage(): Promise<AverageResponse> {
        try {
            const { data } = await axios.get<AverageResponse>(url+`/age/average`)
            return data            
        } catch (error) {
            throw new Error("Error in service");
        }
    },
    async getAverageMaleFemale(): Promise<AverageMaleFemaleResponse> {
        try {
            const { data } = await axios.get<AverageMaleFemaleResponse>(url+`/gender/average`)
            return data            
        } catch (error) {
            throw new Error("Error in service");
        }
    }
}
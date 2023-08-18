import baseApi from '../../services';
import { Employee } from '../../utils/types';

export const employeeByIdApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeById: builder.query<{ data: Employee }, number>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetEmployeeByIdQuery } = employeeByIdApi;

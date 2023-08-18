import baseApi from '../../services';
import { TagTypes } from '../../utils/enum';
import { Employee } from '../../utils/types';

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ data: Employee[] }, void>({
      query: () => ({
        url: '/employees',
        method: 'GET'
      }),
      providesTags: [TagTypes.Employee_List]
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [TagTypes.Employee_List]
    })
  })
});

export const { useGetEmployeeListQuery, useDeleteEmployeeMutation } = employeeApi;

import baseApi from '../../services';
import { TagTypes } from '../../utils/enum';
import { Employee } from '../../utils/types';

const createEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (body: Employee) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: [TagTypes.Employee_List]
    })
  })
});

export const { useCreateEmployeeMutation } = createEmployeeApi;

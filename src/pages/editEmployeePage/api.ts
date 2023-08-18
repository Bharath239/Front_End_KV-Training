import baseApi from '../../services';
import { TagTypes } from '../../utils/enum';

const editEmployeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editEmployee: builder.mutation({
      query: ({ body, id }) => ({
        url: `/employees/${id}`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: [TagTypes.Employee_List]
    })
  })
});

export const { useEditEmployeeMutation } = editEmployeeApi;

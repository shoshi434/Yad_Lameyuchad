import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../config/api';

const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ['Child', 'Club', 'Volunteer', 'Admin'],

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/api`,

    // ⭐⭐ המקום שבו שולחים את הטוקן לשרת
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // לוקחים את הטוקן מרידקס

      if (token) {
        headers.set("authorization", `Bearer ${token}`); // שולחים אותו לשרת
      }

      return headers;
    }
  }),

  endpoints: () => ({}),
});

export default apiSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';
import { Contact } from '../../types/types';

// https://phonebook-app-backend-xskd.onrender.com/api

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ['Contact'],

  endpoints: (builder) => ({
    getContacts: builder.query<Contact, string>({
      query: (id) => `contacts/${id}`,
      providesTags: ['Contact']
    }),
    addContacts: builder.mutation<any, any>({
      query: ({id, ...data}) => ({
        url: `contacts/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact']
    }),
      updateContact: builder.mutation({
        query: ({id, ...body}) => ({
          url: `contacts/${id}`,
          method: 'PUT',
          body: body,
        }),
        invalidatesTags: ['Contact']
      }),
      updatePhoto: builder.mutation({
        query: ({_id, file}) => {
          const data = new FormData();
          data.append('Content-Type', file.type);
          data.append('avatar', file);

          return {
            url: `contacts/${_id}/avatar`,
            method: 'PATCH',
            body: data,
          }
        },
        invalidatesTags: ['Contact']
      }),
      
     deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
         method: 'DELETE',
        }),
        invalidatesTags: ['Contact']
    }),
  })
})

export const { useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactMutation,
useUpdateContactMutation,
useUpdatePhotoMutation
} = contactsApi;
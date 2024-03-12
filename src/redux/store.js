import { configureStore } from '@reduxjs/toolkit'
import Authslice from './slices/Authslice'
import { apiCall } from './Api/Api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    Auth:Authslice,
    [apiCall.reducerPath]:apiCall.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCall.middleware),
})

setupListeners(store.dispatch)
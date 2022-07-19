import { configureStore } from '@reduxjs/toolkit'
import { repositoriesSlice } from './repositoriesSlice'

export const store = configureStore({
  reducer: {
    [repositoriesSlice.name]: repositoriesSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {repositories: RepositoriessState}
export type AppDispatch = typeof store.dispatch

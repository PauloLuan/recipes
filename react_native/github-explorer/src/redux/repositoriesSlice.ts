import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface RepositoriesState {
  value: number
}

// Define the initial state using that type
const initialState: RepositoriesState = {
  value: 0
}

export const repositoriesSlice = createSlice({
  name: 'repositories',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
})

export const { increment } = repositoriesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.repositories.value

export default repositoriesSlice.reducer

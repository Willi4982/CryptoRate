import {configureStore } from '@reduxjs/toolkit'
import cardReduser from './cardSlise'
import moduleReduser from './moduleSlise'

const store = configureStore({
  reducer: {
    cards:cardReduser,
    module:moduleReduser,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
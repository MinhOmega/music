import appSlice, { AppSliceState } from '@/redux/slices/app.slice'
import connectSlice, { ConnectSliceState } from '@/redux/slices/connect.slice'
import playerSlice, { PlayerSliceState } from '@/redux/slices/player.slice'
import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { AnyAction, combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

const combinedReducer = combineReducers({
  app: appSlice.reducer,
  connect: connectSlice.reducer,
  player: persistReducer<any>(
    {
      key: 'music-box:player',
      storage,
      whitelist: ['repeatMode'],
      stateReconciler: autoMergeLevel2,
    },
    playerSlice.reducer
  ),
})

export const store = configureStore({
  reducer: persistReducer<any>(
    {
      key: 'music-box',
      storage,
      whitelist: ['app'],
      stateReconciler: autoMergeLevel2,
    },
    combinedReducer
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor = persistStore(store)

export interface RootState {
  app: AppSliceState
  player: PlayerSliceState
  connect: ConnectSliceState
}

export type AppDispatch = typeof store.dispatch

export type AppThunkAction<R> = ThunkAction<R, RootState, unknown, AnyAction>

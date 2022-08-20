import { useDispatch } from 'react-redux'
import { store } from '../store'

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

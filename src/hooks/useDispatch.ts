// hooks.ts
import { useDispatch as dispatchHook, } from 'react-redux';
import { AppDispatch, AppThunk } from '../redux/types'

// Хук не даст отправить экшен, который ему не знаком
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 
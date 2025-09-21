import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, rootState } from "../toolkit";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

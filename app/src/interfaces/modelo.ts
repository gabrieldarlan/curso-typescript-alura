import { Comparavel } from "./comparavel";
import { Imprimivel } from "../utils/imprimivel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T> {}

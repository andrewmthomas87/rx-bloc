import Bloc from './Bloc';
import { Observable } from 'rxjs';
declare function useBlocState<E, S>(bloc: Bloc<E, S>): S;
declare function useBlocDerivedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: Observable<S>) => Observable<T>, initialValue: T | (() => T)): T;
export { useBlocState, useBlocDerivedState };

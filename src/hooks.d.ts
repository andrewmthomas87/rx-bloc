import Bloc from './Bloc';
import { Observable } from 'rxjs';
declare function useTemporaryBloc<E, S>(factory: () => Bloc<E, S>): Bloc<E, S>;
declare function useBlocState<E, S>(bloc: Bloc<E, S>): S;
declare function useBlocDerivedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: Observable<S>) => Observable<T>, initialValue: (state: S) => T): T;
declare function useBlocMappedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: S) => T): T;
export { useTemporaryBloc, useBlocState, useBlocDerivedState, useBlocMappedState };

import Bloc from './Bloc';
declare function useBlocState<E, S>(bloc: Bloc<E, S>): S;
declare function useBlocDerivedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: S) => T, compare?: (derivedState: T, nextDerivedState: T) => boolean): T;
export { useBlocState, useBlocDerivedState };

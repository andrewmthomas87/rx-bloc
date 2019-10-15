import Bloc from './Bloc';
declare function useBloc<E, S>(bloc: Bloc<E, S>): [S, (event: E) => void];
export { useBloc };

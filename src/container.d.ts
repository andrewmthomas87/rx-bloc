import Bloc from './Bloc';
declare class Container {
    private _blocs;
    register<E, S>(symbol: Symbol, bloc: Bloc<E, S>): void;
    get<E, S>(symbol: Symbol): Bloc<E, S>;
}
declare const _default: Container;
export default _default;

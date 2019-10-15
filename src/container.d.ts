import Bloc from './Bloc';
interface BlocKey<E, S> {
    symbol: Symbol;
    class?: {
        new (): Bloc<E, S>;
    };
}
declare class Container {
    private _blocs;
    register<E, S>(key: BlocKey<E, S>, bloc: Bloc<E, S>): void;
    unregister<E, S>(key: BlocKey<E, S>): void;
    get<E, S>(key: BlocKey<E, S>): Bloc<E, S>;
}
declare const container: Container;
export { BlocKey, container as default };

import { Observable } from 'rxjs';
declare abstract class Bloc<E, S> {
    private _eventHandler;
    private _state;
    state: Observable<S>;
    readonly currentState: S;
    constructor(initialState: () => S);
    dispatch(event: E): void;
    protected abstract _mapEventToState(event: E): Observable<S>;
}
export default Bloc;

import { Observable } from 'rxjs';
declare abstract class Bloc<E, S> {
    private _eventHandler;
    state: Observable<S>;
    constructor();
    dispatch(event: E): void;
    protected abstract _initialState(): S;
    protected abstract _mapEventToState(event: E): Observable<S>;
}
export default Bloc;

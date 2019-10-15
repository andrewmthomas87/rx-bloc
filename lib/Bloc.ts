import { fromEventPattern, BehaviorSubject, Observable, ConnectableObservable } from 'rxjs'
import { multicast, mergeMap, distinctUntilChanged } from 'rxjs/operators'
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent'

abstract class Bloc<E, S> {
	private _eventHandler: NodeEventHandler | null = null
	private _state: BehaviorSubject<S>

	public state: Observable<S>

	public get currentState(): S {
		return this._state.getValue()
	}

	public constructor() {
		this._state = new BehaviorSubject(this._initialState())
		this.state = fromEventPattern<E>(
			handler => this._eventHandler = handler,
			() => this._eventHandler = null
		).pipe(
			mergeMap(this._mapEventToState.bind(this)),
			distinctUntilChanged(),
			multicast(this._state),
		)
		{ (this.state as ConnectableObservable<S>).connect() }
	}

	public dispatch(event: E) {
		if (this._eventHandler !== null) {
			this._eventHandler(event)
		}
	}

	protected abstract _initialState(): S

	protected abstract _mapEventToState(event: E): Observable<S>
}

export default Bloc

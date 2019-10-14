import { fromEventPattern, BehaviorSubject, Observable } from 'rxjs'
import { multicast, mergeMap, distinctUntilChanged } from 'rxjs/operators'
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent'

abstract class Bloc<E, S> {
	private _eventHandler: NodeEventHandler | null = null

	public state: Observable<S>

	public constructor() {
		this.state = fromEventPattern<E>(
			handler => this._eventHandler = handler,
			() => this._eventHandler = null
		).pipe(
			mergeMap(this._mapEventToState),
			distinctUntilChanged(),
			multicast(new BehaviorSubject(this._initialState()))
		)
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

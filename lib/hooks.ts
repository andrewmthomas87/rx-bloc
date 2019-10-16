import Bloc from './Bloc'
import { useState, useEffect } from 'react'
import { Observable } from 'rxjs'

function useBlocState<E, S>(bloc: Bloc<E, S>): S {
	const [state, setState] = useState(() => bloc.currentState)
	useEffect(function () {
		const subscription = bloc.state.subscribe(state => setState(state))

		return subscription.unsubscribe
	}, [bloc])

	return state
}

function useBlocDerivedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: Observable<S>) => Observable<T>, initialValue: T | (() => T)): T {
	const [derivedState, setDerivedState] = useState(initialValue)
	useEffect(function () {
		const subscription = derive(bloc.state).subscribe(state => setDerivedState(state))

		return subscription.unsubscribe
	}, [bloc])

	return derivedState
}

export { useBlocState, useBlocDerivedState }

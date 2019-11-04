import Bloc from './Bloc'
import { useState, useEffect } from 'react'
import { Observable } from 'rxjs'
import { map, distinctUntilChanged } from 'rxjs/operators'

function useBlocState<E, S>(bloc: Bloc<E, S>): S {
	const [state, setState] = useState(() => bloc.currentState)
	useEffect(function () {
		const subscription = bloc.state.subscribe(state => setState(state))

		return () => subscription.unsubscribe()
	}, [bloc])

	return state
}

function useBlocDerivedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: Observable<S>) => Observable<T>, initialValue: (state: S) => T): T {
	const [derivedState, setDerivedState] = useState(initialValue(bloc.currentState))
	useEffect(function () {
		const subscription = derive(bloc.state).subscribe(state => setDerivedState(state))

		return () => subscription.unsubscribe()
	}, [bloc])

	return derivedState
}

function useBlocMappedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: S) => T): T {
	return useBlocDerivedState(
		bloc,
		state => state.pipe(
			map(derive),
			distinctUntilChanged()
		),
		derive
	)
}

export { useBlocState, useBlocDerivedState, useBlocMappedState }

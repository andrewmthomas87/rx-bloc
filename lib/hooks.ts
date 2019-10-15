import Bloc from './Bloc'
import { useState, useEffect } from 'react'

function useBlocState<E, S>(bloc: Bloc<E, S>): S {
	const [state, setState] = useState(() => bloc.currentState)
	useEffect(function () {
		const subscription = bloc.state.subscribe(state => setState(state))

		return subscription.unsubscribe
	}, [bloc])

	return state
}

function useBlocDerivedState<E, S, T>(bloc: Bloc<E, S>, derive: (state: S) => T, compare?: (derivedState: T, nextDerivedState: T) => boolean): T {
	const [derivedState, setDerivedState] = useState(() => derive(bloc.currentState))
	useEffect(function () {
		const subscription = bloc.state.subscribe((nextState: S) => {
			const nextDerivedState = derive(nextState)
			if (compare !== undefined) {
				if (compare(derivedState, nextDerivedState)) {
					setDerivedState(nextDerivedState)
				}
			}
			else if (!Object.is(nextDerivedState, derivedState)) {
				setDerivedState(nextDerivedState)
			}
		})

		return subscription.unsubscribe
	}, [bloc])

	return derivedState
}

export { useBlocState, useBlocDerivedState }

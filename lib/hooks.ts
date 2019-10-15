import Bloc from './Bloc'
import { useState, useEffect } from 'react'

function useBloc<E, S>(bloc: Bloc<E, S>): [S, (event: E) => void] {
	const [state, setState] = useState(() => bloc.currentState)
	useEffect(function () {
		const subscription = bloc.state.subscribe(state => setState(state))
		return subscription.unsubscribe
	}, [bloc])

	return [state, bloc.dispatch]
}

export { useBloc }

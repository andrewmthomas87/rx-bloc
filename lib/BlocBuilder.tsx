import * as React from 'react'
import { Subscription } from 'rxjs'

import Bloc from './Bloc'

interface Props<E, S> {
	bloc: Bloc<E, S>
	builder(state: S): React.ReactElement | null
}

interface State<S> {
	state: S | null
}

class BlocBuilder<E, S> extends React.Component<Props<E, S>, State<S>> {
	private _subscription: Subscription | null = null

	public state: State<S> = { state: null }

	public componentDidMount() {
		this._subscription = this.props.bloc.state.subscribe(state => this.setState({ state }))
	}

	public componentWillUnmount() {
		if (this._subscription !== null) {
			this._subscription.unsubscribe()
			this._subscription = null
		}
	}

	public render() {
		return this.state.state === null
			? null
			: this.props.builder(this.state.state)
	}
}

export default BlocBuilder

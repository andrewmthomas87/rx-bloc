import Bloc from './Bloc'

interface BlocKey<E, S> {
	symbol: Symbol
	class?: { new(): Bloc<E, S> }
}

class Container {
	private _blocs: Map<Symbol, Bloc<any, any>> = new Map()

	public register<E, S>(key: BlocKey<E, S>, bloc: Bloc<E, S>) {
		this._blocs.set(key.symbol, bloc)
	}

	public unregister<E, S>(key: BlocKey<E, S>) {
		this._blocs.delete(key.symbol)
	}

	public get<E, S>(key: BlocKey<E, S>): Bloc<E, S> {
		const bloc = this._blocs.get(key.symbol)
		if (bloc === undefined) {
			throw new Error('Invalid key')
		}

		return bloc
	}
}

const container = new Container()

export { BlocKey, container as default }

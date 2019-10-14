import Bloc from './Bloc'

class Container {
	private _blocs: Map<Symbol, Bloc<any, any>> = new Map()

	public register<E, S>(symbol: Symbol, bloc: Bloc<E, S>) {
		this._blocs.set(symbol, bloc)
	}

	public get<E, S>(symbol: Symbol): Bloc<E, S> {
		const bloc = this._blocs.get(symbol)
		if (bloc === undefined) {
			throw new Error('Invalid symbol')
		}

		return bloc
	}
}

export default new Container()

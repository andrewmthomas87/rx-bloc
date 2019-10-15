import * as React from 'react';
import Bloc from './Bloc';
interface Props<E, S> {
    bloc: Bloc<E, S>;
    builder(state: S): React.ReactElement | null;
}
interface State<S> {
    state: S | null;
}
declare class BlocBuilder<E, S> extends React.Component<Props<E, S>, State<S>> {
    private _subscription;
    state: State<S>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}
export default BlocBuilder;

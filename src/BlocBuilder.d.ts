import * as React from 'react';
import Bloc from './Bloc';
interface IProps<E, S> {
    bloc: Bloc<E, S>;
    builder(state: S): React.ReactElement | null;
}
interface IState<S> {
    state: S | null;
}
declare class BlocBuilder<E, S> extends React.Component<IProps<E, S>, IState<S>> {
    private _subscription;
    state: IState<S>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}
export default BlocBuilder;

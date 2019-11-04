"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var operators_1 = require("rxjs/operators");
var container_1 = require("./container");
function useTemporaryBloc(key, factory) {
    var bloc = react_1.useState(function () {
        var bloc = factory();
        container_1.default.register(key, bloc);
        return bloc;
    })[0];
    react_1.useEffect(function () {
        return function () { return container_1.default.unregister(key); };
    }, []);
    return bloc;
}
exports.useTemporaryBloc = useTemporaryBloc;
function useBlocState(bloc) {
    var _a = react_1.useState(function () { return bloc.currentState; }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var subscription = bloc.state.subscribe(function (state) { return setState(state); });
        return function () { return subscription.unsubscribe(); };
    }, [bloc]);
    return state;
}
exports.useBlocState = useBlocState;
function useBlocDerivedState(bloc, derive, initialValue) {
    var _a = react_1.useState(initialValue(bloc.currentState)), derivedState = _a[0], setDerivedState = _a[1];
    react_1.useEffect(function () {
        var subscription = derive(bloc.state).subscribe(function (state) { return setDerivedState(state); });
        return function () { return subscription.unsubscribe(); };
    }, [bloc]);
    return derivedState;
}
exports.useBlocDerivedState = useBlocDerivedState;
function useBlocMappedState(bloc, derive) {
    return useBlocDerivedState(bloc, function (state) { return state.pipe(operators_1.map(derive), operators_1.distinctUntilChanged()); }, derive);
}
exports.useBlocMappedState = useBlocMappedState;

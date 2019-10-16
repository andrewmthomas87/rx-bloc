"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useBlocState(bloc) {
    var _a = react_1.useState(function () { return bloc.currentState; }), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        var subscription = bloc.state.subscribe(function (state) { return setState(state); });
        return subscription.unsubscribe;
    }, [bloc]);
    return state;
}
exports.useBlocState = useBlocState;
function useBlocDerivedState(bloc, derive, initialValue) {
    var _a = react_1.useState(initialValue(bloc.currentState)), derivedState = _a[0], setDerivedState = _a[1];
    react_1.useEffect(function () {
        var subscription = derive(bloc.state).subscribe(function (state) { return setDerivedState(state); });
        return subscription.unsubscribe;
    }, [bloc]);
    return derivedState;
}
exports.useBlocDerivedState = useBlocDerivedState;

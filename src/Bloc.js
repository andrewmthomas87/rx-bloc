"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Bloc = (function () {
    function Bloc(initialState) {
        var _this = this;
        this._eventHandler = null;
        this._state = new rxjs_1.BehaviorSubject(initialState());
        this.state = rxjs_1.fromEventPattern(function (handler) { return _this._eventHandler = handler; }, function () { return _this._eventHandler = null; }).pipe(operators_1.mergeMap(this._mapEventToState.bind(this)), operators_1.distinctUntilChanged(), operators_1.multicast(this._state));
        {
            this.state.connect();
        }
    }
    Object.defineProperty(Bloc.prototype, "currentState", {
        get: function () {
            return this._state.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Bloc.prototype.dispatch = function (event) {
        if (this._eventHandler !== null) {
            this._eventHandler(event);
        }
    };
    return Bloc;
}());
exports.default = Bloc;

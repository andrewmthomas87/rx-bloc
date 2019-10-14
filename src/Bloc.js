"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Bloc = (function () {
    function Bloc() {
        var _this = this;
        this._eventHandler = null;
        this.state = rxjs_1.fromEventPattern(function (handler) { return _this._eventHandler = handler; }, function () { return _this._eventHandler = null; }).pipe(operators_1.mergeMap(this._mapEventToState), operators_1.distinctUntilChanged(), operators_1.multicast(new rxjs_1.BehaviorSubject(this._initialState())));
    }
    Bloc.prototype.dispatch = function (event) {
        if (this._eventHandler !== null) {
            this._eventHandler(event);
        }
    };
    return Bloc;
}());
exports.default = Bloc;
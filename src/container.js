"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = (function () {
    function Container() {
        this._blocs = new Map();
    }
    Container.prototype.register = function (symbol, bloc) {
        this._blocs.set(symbol, bloc);
    };
    Container.prototype.get = function (symbol) {
        var bloc = this._blocs.get(symbol);
        if (bloc === undefined) {
            throw new Error('Invalid symbol');
        }
        return bloc;
    };
    return Container;
}());
exports.default = new Container();

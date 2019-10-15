"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Container = (function () {
    function Container() {
        this._blocs = new Map();
    }
    Container.prototype.register = function (key, bloc) {
        this._blocs.set(key.symbol, bloc);
    };
    Container.prototype.unregister = function (key) {
        this._blocs.delete(key.symbol);
    };
    Container.prototype.get = function (key) {
        var bloc = this._blocs.get(key.symbol);
        if (bloc === undefined) {
            throw new Error('Invalid key');
        }
        return bloc;
    };
    return Container;
}());
var container = new Container();
exports.default = container;

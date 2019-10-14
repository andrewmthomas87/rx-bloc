"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BlocBuilder = (function (_super) {
    __extends(BlocBuilder, _super);
    function BlocBuilder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._subscription = null;
        _this.state = { state: null };
        return _this;
    }
    BlocBuilder.prototype.componentDidMount = function () {
        var _this = this;
        this._subscription = this.props.bloc.state.subscribe(function (state) { return _this.setState({ state: state }); });
    };
    BlocBuilder.prototype.componentWillUnmount = function () {
        if (this._subscription !== null) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    };
    BlocBuilder.prototype.render = function () {
        return this.state.state === null
            ? null
            : this.props.builder(this.state.state);
    };
    return BlocBuilder;
}(React.Component));
exports.default = BlocBuilder;

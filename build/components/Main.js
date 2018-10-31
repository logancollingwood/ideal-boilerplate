"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Footer_1 = require("./ui/Footer");
var NavBar_1 = require("./ui/NavBar");
var SideBar_1 = require("./ui/SideBar");
var Content_1 = require("./ui/Content");
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement(Grid, null,
            React.createElement(Row, null,
                React.createElement(NavBar_1.NavBar, null)),
            React.createElement(Row, null,
                React.createElement(Col, { xs: 12, md: 8 },
                    React.createElement(Content_1.Content, null)),
                React.createElement(Col, { xs: 6, md: 4 },
                    React.createElement(SideBar_1.SideBar, null))),
            React.createElement(Row, null,
                React.createElement(Footer_1.Footer, null))));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=Main.js.map
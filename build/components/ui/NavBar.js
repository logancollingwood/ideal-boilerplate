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
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');
var NavBar = (function (_super) {
    __extends(NavBar, _super);
    function NavBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavBar.prototype.render = function () {
        return React.createElement(Navbar, null,
            React.createElement(Navbar.Header, null,
                React.createElement(Navbar.Brand, null,
                    React.createElement("a", { href: "#home" }, "React-Bootstrap"))),
            React.createElement(Nav, null,
                React.createElement(NavItem, { eventKey: 1, href: "#" }, "Link"),
                React.createElement(NavItem, { eventKey: 2, href: "#" }, "Link"),
                React.createElement(NavDropdown, { eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown" },
                    React.createElement(MenuItem, { eventKey: 3.1 }, "Action"),
                    React.createElement(MenuItem, { eventKey: 3.2 }, "Another action"),
                    React.createElement(MenuItem, { eventKey: 3.3 }, "Something else here"),
                    React.createElement(MenuItem, { divider: true }),
                    React.createElement(MenuItem, { eventKey: 3.4 }, "Separated link"))));
    };
    return NavBar;
}(React.Component));
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map
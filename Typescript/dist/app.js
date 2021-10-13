"use strict";
// DOCUMENTATION
// https://www.typescriptlang.org/docs/handbook/utility-types.html
// OPTIONAL GENERICS
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    return Fish;
}());
var generator = function (options) {
    if ('swim' in options) {
        return new Fish();
    }
    else {
        return new Cat();
    }
};
var a = generator({ jump: function () { return console.log('Fish'); } });
// GENERIC MAPING FROM CLASS
var UserOptions = /** @class */ (function () {
    function UserOptions() {
        this.env = 'dev';
    }
    UserOptions.prototype.darkMode = function () {
        return true;
    };
    UserOptions.prototype.privateMode = function () {
        return true;
    };
    UserOptions.prototype.nsfwMode = function () {
        return true;
    };
    return UserOptions;
}());

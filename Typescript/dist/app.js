"use strict";
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

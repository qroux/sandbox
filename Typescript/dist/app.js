"use strict";
exports.__esModule = true;
var alpinejs_1 = require("alpinejs");
alpinejs_1["default"].data('myComponent', function (initial) {
    if (initial === void 0) { initial = 0; }
    return {
        compteur: initial,
        increment: function () {
            this.compteur += 1;
        },
        decrement: function () {
            this.compteur -= 1;
            if (this.compteur < 0) {
                this.$el.style.display = 'none';
            }
        }
    };
});
alpinejs_1["default"].start();
// // DOCUMENTATION
// // https://www.typescriptlang.org/docs/handbook/utility-types.html
// // OPTIONAL GENERICS
// class Cat {}
// class Fish {}
// type AnimalOptions = { swim: any } | { jump: any };
// type AnimalOutput<T> = T extends { swim: any } ? Fish : Cat;
// const generator = <T extends AnimalOptions>(options: T): AnimalOutput<T> => {
//   if ('swim' in options) {
//     return new Fish();
//   } else {
//     return new Cat();
//   }
// };
// const a = generator({ jump: () => console.log('Fish') });
// // GENERIC MAPING FROM CLASS
// class UserOptions {
//   env = 'dev';
//   darkMode() {
//     return true;
//   }
//   privateMode() {
//     return true;
//   }
//   nsfwMode() {
//     return true;
//   }
// }
// type OptionsFlag<T> = {
//   +readonly // +accessor [key in keyof T as `remapping${string & key}`]+optional?: T[key] extends () => boolean ? boolean : never;
//   [key in keyof T as `get${string & key}`]+?: T[key] extends () => boolean
//     ? boolean
//     : never;
// };
// type A = OptionsFlag<UserOptions>;

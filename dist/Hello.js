"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hello {
    constructor() {
        this.great();
    }
    /**
     * great
     */
    great() {
        console.log('Hello, TypeScript!');
    }
}
exports.default = new Hello();

class Hello {
    constructor() {
        this.great();
    }

    /**
     * great
     */
    public great(): void {
        console.log('Hello, TypeScript!');
    }
}

export default new Hello();

"use strict";

class Params {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Rectangle extends Params {
    constructor(color, lineWidth, width, height) {
        super(width, height)
        this.color = color;
        this.lineWidth = lineWidth;
    }

    draw () {
        console.log("Прямоугольник: "+this.color.red+", "+this.lineWidth.x);

    }

}

let Rectangle1 = new Rectangle('red', 1, 10, 15)
console.log (Rectangle1);
import { canvas, ctx, rand } from "./util.js";
let count = 0;

export class Duck {
    img1 = new Image();
    frame = 1;
    constructor() {
        this.x = rand(innerWidth - 250, 1);
        this.y = innerHeight - 400;
        this.w = 150;
        this.h = 150;

        this.dx = rand(4, -4);
        this.dy = rand(4, -4);
        this.img1.src = "./images/Black_Duck/1.png";
        this.img1.onload = () => ctx.drawImage(this.img1, this.x, this.y, this.w, this.h);
    }

    draw() {
        this.img1.onload();
    }
    move() {
        this.draw();
        this.x += this.dx;
        this.y -= this.dy;
        if ((this.x + this.y) % 500 >= 0 && (this.x + this.y) % 500 <= 10) {
        this.frame++;
        this.img1.src = `images/Black_Duck/${this.frame}.png`;
            if (this.frame == 15) {
                    this.frame = 1;
            }
        }
        if (this.x + this.w >= innerWidth || this.x <= 0) {
        this.dx = -this.dx;
        }
        if (this.y <= 0) {
        this.dy -= 5;
        }    
    }
    
}


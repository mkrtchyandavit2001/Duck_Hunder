import {canvas, ctx} from "./util.js"

export class Target{
    img = new Image()
    constructor(){
        this.img.src = "./images/target.png"
        this.x = innerWidth / 2 - 90
        this.y = innerHeight / 2 - 120
        this.h = 90
        this.w = 90
        this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    draw(){
        this.img.onload()
    }
    move(){
        this.draw()
    }
    moveRight(){
        this.x += 50
    }
    moveLeft(){
        this.x -= 50
    }
    moveUp(){
        this.y -= 50
    }
    moveDown(){
        this.y += 50
    }
}
import {canvas, ctx} from "./util.js"

export class Decoration{
    img = new Image()
    x = 0
    y = innerHeight - 90
    w = innerWidth - 20
    h = 700

    constructor(){
        this.img.src = "./images/grass1.png"
        this.img.onload = () => ctx.drawImage(this.img, 0, innerHeight-620, canvas.width, 600)
    }
    draw(){
        this.img.onload()
    }
    move(){
        this.draw()
    }

}
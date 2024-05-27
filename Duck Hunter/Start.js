import {ctx, canvas} from "./util.js"
import { Dog } from "./Dog.js";

export class Start{
    img = new Image()
    dog = new Dog()
    constructor(){
        this.x = 0
        this.y = 0
        this.w = innerWidth
        this.h = innerHeight

        this.img.src = "./images/beginning.jpg"
        this.img.onload = () =>  ctx.drawImage(this.img, 0, 0, innerWidth, innerHeight)
        this.img.onload = () =>  ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

        window.onclick = () => {
            this.w = 0
        }
    }

    draw(){
        this.img.onload()
    }
}
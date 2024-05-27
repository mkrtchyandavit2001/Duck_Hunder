import {canvas, ctx, rand} from "./util.js"
import { Duck } from "./Duck.js"
export class Dog{
    hachal = new Audio("sound/dog-hachal.mp3")
    duck = new Duck()
    img = new Image()
    jmp1 = new Image()
    frame = 1
    constructor(){
        this.x =  100
        this.y = innerHeight -250
        this.w = 400
        this.h = 200
        this.img.src = "./images/dog/1.png"
        this.jmp1.src = "./images/dog/dog8.png"
        this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        this.jmp1.onload = () => ctx.drawImage(this.jmp1, this.x, this.y, this.w, this.h)
    }
    draw(){
        this.x += 5 
        if(this.x % 80 >= 0 && this.x % 80 <= 10){
            this.frame++
            this.img.src = `images/dog/${this.frame}.png`
            if(this.frame == 5){
                this.frame = 1
            }
        }
    }
    moveRight(){
        this.draw()
        if(this.x >= 400){
            if(!(this.y <= innerHeight - 400)){
                this.jmp1.onload()
            }
            this.x = 400
            this.y -= 4
            if(this.y <= innerHeight - 400 && this.y  <= innerHeight - 400){
                this.y = innerHeight - 400

            }
        }else{
        this.img.onload()
        }   
    }
}
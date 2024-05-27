import { canvas, ctx, rand } from "./util.js";
import { Dog } from "./Dog.js";
import { Duck } from "./Duck.js";
import { Decoration } from "./Decoration.js";
import { Target } from "./Target.js";
import { Points } from "./Points.js";
import { Start } from "./Start.js"; 

export class Game {
    bg = new Image();
    dog = new Dog();
    target = new Target();
    decoration = new Decoration();
    points = new Points();
    duck = new Duck();
    start = new Start()
    audio = new Audio("sound/mixkit-arcade-game-explosion-2759.wav");
    dropDuck = new Audio("sound/duck-drop.mp3");
    gameSound = new Audio("sound/myinstants.mp3")
    dogWin = new Image()
    dogLose = new Image()
    gameFrame = 0

    constructor() {
        this.bg.src = "./images/background.jpg";
        this.bg.onload = () => ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height - 50);
        this.dogWin.src = "./images/dog/dog12.png";
        this.dogWin.onload = () => ctx.drawImage(this.dogWin, innerWidth / 2, 300, 250, 350);
        this.dogLose.src = "./images/dog/dog10.png";
        this.dogLose.onload = () => ctx.drawImage(this.dogLose, innerWidth / 2, 300, 200, 350);
        this.id = requestAnimationFrame(() => this.run());

        window.onkeydown = (e) => {
            if (e.key == "ArrowRight" || e.key == "d") {
                this.target.moveRight();
                if (this.target.x + this.target.w >= canvas.width) {
                this.target.x = canvas.width - this.target.w;
                }
            } else if (e.key == "ArrowLeft" || e.key == "a") {
                this.target.moveLeft();
                if (this.target.x <= 0) {
                this.target.x = 0;
                }
            } else if (e.key == "ArrowUp" || e.key == "w") {
                this.target.moveUp();
                if (this.target.y <= 0) {
                this.target.y = 0;
                }
            } else if (e.key == "ArrowDown" || e.key == "s") {
                this.target.moveDown();
                if (this.target.y + this.target.h >= canvas.height - 300) {
                this.target.y = canvas.height - 270;
                }
            } else if (e.key == " ") {
                this.audio.currentTime = 0;
                this.audio.play();
                if (this.target.x >= this.duck.x && this.target.x <= this.duck.x + this.duck.w) {
                    if (this.target.y >= this.duck.y && this.target.y <= this.duck.y + this.duck.h - 20){
                        this.points.point += 500
                        this.duck.dx = 0;
                        this.duck.dy -= 7;
                        this.dropDuck.play();
                        this.duck.img1.src =  "./images/Black_Duck/duck11.png";
                    }    
                }
            }
        }       
    }

    ducksMove(){
        if(this.duck.y >= innerHeight - 50){
            this.duck.y = innerHeight - 60
            this.duck.dy += 7
            this.duck.dx = rand(4, -4)
            this.duck.count = 1
            this.gameFrame++
            this.duck.img1.src =  "./images/Black_Duck/1.png";
        }
        if(this.duck.y <= -150){
            this.duck.y = innerHeight - 110
            this.duck.dy = rand(-2, -1)
            this.duck.dx = rand(4, -4)
            this.duck.count = 1
            this.gameFrame++
        }
    }
    gameover(){
        if(this.gameFrame == 10){
                cancelAnimationFrame(this.id)
        }

        if(this.gameFrame == 5){
            ctx.font = '120px Tahoma';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'red';
            ctx.fillText("Next Level", innerWidth / 2, innerHeight  / 2);
            if(this.duck.y <= 370){
                this.gameFrame++
            }
        }

        if(this.points.point >= 3500 && this.gameFrame == 10){
            ctx.fillStyle = "#000"
            ctx.fillText("You are the winner", (innerWidth / 2) - 240, (innerHeight / 2) - 60)
            ctx.font = "120px Mono"
            this.dogWin.onload()
        }
        else if(this.points.point < 3500 && this.gameFrame == 10){
            ctx.fillStyle = "#000"
            ctx.fillText("You louse", (innerWidth / 2) - 240, (innerHeight / 2) - 60)
            ctx.font = "120px Mono"
            this.dogLose.onload()
        }
    }

    run() {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        this.id = requestAnimationFrame(() => this.run());
        this.bg.onload();
        this.gameSound.play()    
        if(this.dog.y  <= innerHeight - 400){
            this.duck.move();
        }else {
            this.dog.hachal.play()
        }
        this.decoration.move();
        this.dog.moveRight();
        this.target.move();
        this.ducksMove()
        this.points.draw();
        this.gameover()
        this.start.draw()
    }
}
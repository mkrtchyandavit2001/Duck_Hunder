import {ctx, canvas} from "./util.js"

export class Points{
    x = 100
    y = 100
    w = 300
    y = 200
    point = 0

    draw(){
        ctx.fillStyle = "#00000093"
        ctx.fillRect(innerWidth - 550, innerHeight - 200, 500, 170)

        ctx.fillStyle = "#fff"
        ctx.fillText("Points", innerWidth - 400, innerHeight - 130)
        ctx.font = "80px Mono"

        ctx.fillStyle = "#ff0"
        ctx.font = "80px cursive"
        ctx.fillText(`${this.point}`, innerWidth - 400, innerHeight - 50) 
    }
}

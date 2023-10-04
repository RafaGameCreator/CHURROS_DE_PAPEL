class Grounderson {
    
    constructor(x, y, w, h) {
        var gOp = {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, w, h, gOp);
        World.add(world, this.body);
    }


    display() {
        var GPos = this.body.position;

        push()
        translate(GPos.x, GPos.y);
        rectMode(CENTER);
        strokeWeight(4)
        fill("yellow")
        rect(0, 0, this.w, this.h)
        pop()
    }
}
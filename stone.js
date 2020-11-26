class Stone{
    
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options)
        this.image=loadImage("sprites/stone.png")
       this.radius=r 
        World.add(world,this.body);



    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
    pop();


    }
}

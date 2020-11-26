class Chain{
    constructor(bodyA,pointB){
    
            var options={
                bodyA:bodyA,
                pointB:pointB,
                length:10,
                stiffness:0.02
                
            }

            this.pointB=pointB
            this.chain=Matter.Constraint.create(options)
           Matter.World.add(world,this.chain);
     }
        display(){
            if (this.chain.bodyA){   
                
                    push();
                    strokeWeight(4);
                    stroke(85,40,15);
                    line(this.chain.bodyA.position.x+20,this.chain.bodyA.position.y,this.pointB.x+10,this.pointB.y-10);
                pop();


                }
            


       }
 fly(){
    this.chain.bodyA=null;



}
attach(body){
this.chain.bodyA=body



}

}


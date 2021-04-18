class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
         
            stiffness: 0.004,
            length: 5
        }

       this.pointB= pointB;
        this.sling1 = Constraint.create(options)
        World.add(world, this.sling1);
    }
fly(){
    this.sling1.bodyA=null
}

launch (bodyA){
this.sling1.bodyA = bodyA
}
    display(){
     
}
}
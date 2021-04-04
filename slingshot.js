class Slingshot
{
    constructor(x,y)
    {
        var options=
        {
            bodyA:x,
            pointB:y,
            length:1,
            stiffness:0.004
        }
        
        this.bodyA=x;
         this.pointB=y;
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
        
    }
    attach(body)
    {
        this.sling.bodyA=body;
    }
    fly()
    {
        this.sling.bodyA=null;
    }

    display()
    {
        if(this.sling.bodyA)
        {
        strokeWeight(3)
        line(this.bodyA.position.x,this.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
    }
}
}
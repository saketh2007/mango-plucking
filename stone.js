class Stone

{
    constructor()
    {
        var options=
        {
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(100,450,70,70,options)
        World.add(world,this.body)
        this.image=loadImage("stone.png")
        this.width=70
    }

    display()
    { 
        push()
		translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER)
        image(this.image,0,0,70,70)
        pop ()
    }
}